import React from "react";

import Home from "./Home";

import Layout from "../../components/Layout";

import { RouteContext } from "../../types";
import { GuestsDocument, GuestsQuery, GuestsQueryVariables } from "../../__generated__/graphql.client";

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
