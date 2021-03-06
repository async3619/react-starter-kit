import "reflect-metadata";
import path from "path";

import { buildSchema } from "../src/data/schema";

export default async function schema() {
    buildSchema({
        emitSchemaFile: path.resolve(process.cwd(), "schema.graphql"),
    });
}
