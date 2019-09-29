import React, { ReactNode } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import StyleContext from "isomorphic-style-loader/StyleContext";

import AppContext, { AppContextType } from "../context";

interface Props {
    insertCss: Function;
    context: AppContextType;
    children: ReactNode;
    client: ApolloClient<NormalizedCacheObject>;
}

const App = ({ insertCss, context, children, client }: Props) => (
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    <ApolloProvider client={client}>
        <AppContext.Provider value={context}>
            <StyleContext.Provider value={{ insertCss }}>{children}</StyleContext.Provider>
        </AppContext.Provider>
    </ApolloProvider>
);

export default App;
