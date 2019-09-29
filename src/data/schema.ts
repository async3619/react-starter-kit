import { GraphQLSchema } from "graphql";
import { BuildSchemaOptions, buildSchemaSync } from "type-graphql";

import GuestsResolver from "./guests/guests.resolver";

let builtSchema: GraphQLSchema | null = null;
function buildSchema(options?: Omit<BuildSchemaOptions, "resolvers" | "dateScalarMode">) {
    if (!builtSchema) {
        builtSchema = buildSchemaSync({
            resolvers: [GuestsResolver],
            dateScalarMode: "timestamp",

            ...options,
        });
    }

    return builtSchema;
}

const schema = buildSchema();
export default schema;
