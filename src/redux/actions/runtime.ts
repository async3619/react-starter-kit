/* eslint-disable import/prefer-default-export */
import { createStandardAction } from "typesafe-actions";

export const setInitialTime = createStandardAction("@runtime/setInitialTime")<number>();
