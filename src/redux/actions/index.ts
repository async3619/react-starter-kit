/* eslint-disable import/prefer-default-export */
import { ActionType } from "typesafe-actions";

import * as RuntimeActionsImpl from "./runtime";

export const RuntimeActions = RuntimeActionsImpl;

export type RuntimeAction = ActionType<typeof RuntimeActions>;
export type RootAction = RuntimeAction;
