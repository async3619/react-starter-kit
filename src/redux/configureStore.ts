import { applyMiddleware, createStore, DeepPartial, Middleware, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { rootReducer, RootState } from "@root/redux/reducers";
import createLogger from "@root/redux/createLogger";
import { RootAction } from "@root/redux/actions";

import pkg from "../../package.json";

export default function configureStore(initialState: DeepPartial<RootState>) {
    const middleware: Middleware[] = [];
    let enhancer: StoreEnhancer;

    if (__DEV__) {
        middleware.push(createLogger());

        // https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
        const composeEnhancers = composeWithDevTools({
            // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
            name: `${pkg.name}@${pkg.version}`,
        });

        // https://redux.js.org/docs/api/applyMiddleware.html
        enhancer = composeEnhancers(applyMiddleware(...middleware));
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    // https://redux.js.org/docs/api/createStore.html
    const store = createStore<RootState, RootAction, {}, {}>(rootReducer, initialState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (__DEV__ && module.hot) {
        module.hot.accept("./reducers", () =>
            // eslint-disable-next-line global-require
            store.replaceReducer(require("./reducers").default),
        );
    }

    return store;
}

export type StoreType = ReturnType<typeof configureStore>;
