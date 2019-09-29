/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";

import App from "../App";
import Layout from ".";
import createApolloClient from "../../utils/createApolloClient.server";

describe("Layout", () => {
    test("renders children correctly", () => {
        const client = createApolloClient({} as any, {} as any);

        const wrapper = renderer
            .create(
                <App
                    context={{
                        pathname: "",
                        query: {},
                        client,
                    }}
                    client={client}
                    insertCss={() => {}}
                >
                    <Layout>
                        <div className="child" />
                    </Layout>
                </App>,
            )
            .toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});
