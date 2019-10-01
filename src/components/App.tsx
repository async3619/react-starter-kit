import React, { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import StyleContext from "isomorphic-style-loader/StyleContext";

import { StoreType } from "@root/redux/configureStore";

import AppContext, { AppContextType } from "../context";

interface Props {
    insertCss: Function;
    context: AppContextType;
    children: ReactNode;
    client: ApolloClient<NormalizedCacheObject>;
    store: StoreType;
}

const App = ({ insertCss, context, children, client, store }: Props) => (
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    <ReduxProvider store={store}>
        <ApolloProvider client={client}>
            <AppContext.Provider value={context}>
                <StyleContext.Provider value={{ insertCss }}>{children}</StyleContext.Provider>
            </AppContext.Provider>
        </ApolloProvider>
    </ReduxProvider>
);

export default App;
