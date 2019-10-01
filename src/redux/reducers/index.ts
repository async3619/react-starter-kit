/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

import runtime from "@root/redux/reducers/runtime";

export const rootReducer = combineReducers({
    runtime,
});

export type RootState = StateType<typeof rootReducer>;
