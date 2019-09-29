import path from "path";
import { BuildSchemaOptions, buildSchemaSync } from "type-graphql";

import GuestsResolver from "./guests/guests.resolver";

export function buildSchema(options?: Omit<BuildSchemaOptions, "resolvers" | "dateScalarMode">) {
    return buildSchemaSync({
        resolvers: [GuestsResolver],
        dateScalarMode: "timestamp",
        emitSchemaFile: __DEV__ ? path.resolve(process.cwd(), "schema.graphql") : undefined,

        ...options,
    });
}

const schema = buildSchema();
export default schema;
