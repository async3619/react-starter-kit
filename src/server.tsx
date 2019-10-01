import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/server";
import { renderToStringWithData } from "react-apollo";
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import PrettyError from "pretty-error";

import App from "@components/App";
import Html from "@components/Html";

import { ErrorPageWithoutStyle } from "@routes/error/ErrorPage";
import errorPageStyle from "@routes/error/ErrorPage.scss";

import configureApolloServer, { generateGraphQLContext } from "@data/configureApolloServer";
import schema from "@data/schema";
import createConnection from "@data/database";

import createApolloClient from "@utils/createApolloClient.server";

import configureStore from "@root/redux/configureStore";
import { RuntimeActions } from "@root/redux/actions";

import { AppContextType } from "./context";
import router from "./router";
import config from "./config";

// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved
// @ts-ignore
import chunks from "./chunk-manifest.json"; // eslint-disable-line import/no-unresolved

process.on("unhandledRejection", (reason, p) => {
    console.error("Unhandled Rejection at:", p, "reason:", reason);
    // send entire app down. Process manager will restart it
    process.exit(1);
});

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
// @ts-ignore
global.navigator = global.navigator || {};
// @ts-ignore
global.navigator.userAgent = global.navigator.userAgent || "all";

const app = express();

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set("trust proxy", config.trustProxy);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
configureApolloServer(app);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get("*", async (req, res, next) => {
    try {
        const css = new Set();

        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        const insertCss = (...styles: any[]) => {
            // eslint-disable-next-line no-underscore-dangle
            styles.forEach(style => css.add(style._getCss()));
        };

        const apolloClient = createApolloClient(
            {
                schema,
                // This is a context consumed in GraphQL Resolvers
                context: generateGraphQLContext(),
            },
            {},
        );

        const store = configureStore({});
        store.dispatch(RuntimeActions.setInitialTime(Date.now()));

        // Global (context) variables that can be easily accessed from any React component
        // https://facebook.github.io/react/docs/context.html
        const context: AppContextType = {
            // The twins below are wild, be careful!
            pathname: req.path,
            query: req.query,
            client: apolloClient,
            store,
        };

        const route = await router.resolve(context);

        context.params = route.params;

        if (route.redirect) {
            res.redirect(route.status || 302, route.redirect);
            return;
        }

        const data = { ...route };
        const rootComponent = (
            <App context={context} client={apolloClient} insertCss={insertCss} store={store}>
                {route.component}
            </App>
        );

        data.children = await renderToStringWithData(rootComponent);
        data.styles = [{ id: "css", cssText: [...css].join("") }];

        const scripts = new Set();
        const addChunk = (chunk: string) => {
            if (chunks[chunk]) {
                chunks[chunk].forEach((asset: any) => scripts.add(asset));
            } else if (__DEV__) {
                throw new Error(`Chunk with name '${chunk}' cannot be found`);
            }
        };

        addChunk("client");
        if (route.chunk) addChunk(route.chunk);
        if (route.chunks) route.chunks.forEach(addChunk);

        data.scripts = Array.from(scripts);
        data.app = {
            apiUrl: config.api.clientUrl,
            cache: apolloClient.extract(),
            state: context.store.getState(),
        };

        // eslint-disable-next-line react/jsx-props-no-spreading
        const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
    } catch (err) {
        next(err);
    }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage("express");

// eslint-disable-next-line no-unused-vars
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    console.error(pe.render(err));
    const html = ReactDOM.renderToStaticMarkup(
        <Html
            app={{}}
            title="Internal Server Error"
            description={err.message}
            styles={[{ id: "css", cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
        >
            {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
        </Html>,
    );
    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
const promise = createConnection().catch((err: Error) => console.error(err.stack));
if (!module.hot) {
    promise.then(() => {
        app.listen(config.port, () => {
            console.info(`The server is running at http://localhost:${config.port}/`);
        });
    });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
    module.hot.accept("./router");
}

export const { hot } = module;
export default app;
