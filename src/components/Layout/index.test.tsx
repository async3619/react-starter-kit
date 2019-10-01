/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { Middleware } from "redux";
import configureStore from "redux-mock-store";

import { RootState } from "@root/redux/reducers";

import App from "../App";
import Layout from ".";
import createApolloClient from "../../utils/createApolloClient.server";

const middlewares: Middleware[] = [];
const mockStore = configureStore<RootState>(middlewares);

describe("Layout", () => {
    test("renders children correctly", () => {
        const client = createApolloClient({} as any, {} as any);
        const store = mockStore({
            runtime: {
                initialTime: 0,
            },
        });

        const wrapper = renderer
            .create(
                <App
                    context={{
                        pathname: "",
                        query: {},
                        client,
                        store: store as any,
                    }}
                    client={client}
                    store={store as any}
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
