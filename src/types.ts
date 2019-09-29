import UniversalRouter, { Route } from "universal-router";

import { AppContextType } from "./context";

export interface GraphQLContext {}

export interface RouteContext extends AppContextType {
    baseUrl: string;
    keys: string;
    next: (...args: any[]) => any;
    path: string;
    route: Route;
    router: UniversalRouter;
}
