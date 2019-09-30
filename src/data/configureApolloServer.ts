import express from "express";
import { ApolloServer } from "apollo-server-express";

import { GraphQLContext } from "@root/types";

import schema from "./schema";

export function generateGraphQLContext(): GraphQLContext {
    return {};
}

export default function configureApolloServer(app: express.Application) {
    const server = new ApolloServer({
        schema,
        uploads: false,
        introspection: __DEV__,
        playground: __DEV__,
        debug: __DEV__,
        context: generateGraphQLContext,
    });

    server.applyMiddleware({ app });
}
