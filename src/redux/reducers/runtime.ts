import { getType } from "typesafe-actions";

import { RuntimeAction, RuntimeActions } from "@root/redux/actions";

export interface RuntimeState {
    initialTime: number;
}

const initialState: RuntimeState = {
    initialTime: 0,
};

export default function runtime(state: RuntimeState = initialState, action: RuntimeAction): RuntimeState {
    switch (action.type) {
        case getType(RuntimeActions.setInitialTime):
            return {
                ...state,
                initialTime: action.payload,
            };

        default:
            return state;
    }
}
