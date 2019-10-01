import { createContext } from "react";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

import { StoreType } from "@root/redux/configureStore";

export type AppContextType = {
    pathname: string;
    query?: Object;
    params?: Object;
    client: ApolloClient<NormalizedCacheObject>;
    store: StoreType;
};

const AppContext = createContext<AppContextType>({
    pathname: "",
    query: {},
    params: {},
    client: {} as any,
    store: {} as any,
});

export default AppContext;
