/* eslint-disable global-require */

// The top-level (parent) route
import { Route } from "universal-router";

const routes: Route = {
    path: "",

    // Keep in mind, routes are evaluated in order
    children: [
        {
            path: "",
            load: () => import(/* webpackChunkName: 'home' */ "./home"),
        },

        // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
        {
            path: "(.*)",
            load: () => import(/* webpackChunkName: 'not-found' */ "./not-found"),
        },
    ],

    async action({ next }: any) {
        // Execute each child route until one of them return the result
        const route = await next();

        // Provide default values for title, description etc.
        route.title = `${route.title || "Untitled Page"} - www.reactstarterkit.com`;
        route.description = route.description || "";

        return route;
    },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
    routes.children!.unshift({
        path: "/error",
        action: require("./error").default,
    });
}

export default routes;