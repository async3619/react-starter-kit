import { createContext } from "react";

import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

export type AppContextType = {
    pathname: string;
    query?: Object;
    params?: Object;
    client: ApolloClient<NormalizedCacheObject>;
};

const AppContext = createContext<AppContextType>({
    pathname: "",
    query: {},
    params: {},
    client: {} as any,
});

export default AppContext;
