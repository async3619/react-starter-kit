import React from "react";

import Layout from "@components/Layout";
import { RouteContext } from "@root/types";

import { GuestsDocument, GuestsQuery, GuestsQueryVariables } from "@generated/graphql.client";

import Home from "./Home";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function action({ client }: RouteContext) {
    const {
        data: { guests },
    } = await client.query<GuestsQuery, GuestsQueryVariables>({
        query: GuestsDocument,
    });

    return {
        title: "React Starter Kit",
        chunks: ["home"],
        component: (
            <Layout>
                <Home guests={guests} />
            </Layout>
        ),
    };
}

export default action;
