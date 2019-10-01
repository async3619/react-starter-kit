import { inspect } from "util";
import { Middleware } from "redux";

function inspectObject(object: any) {
    return inspect(object, {
        colors: true,
    });
}

// Server side redux action logger
export default function createLogger(): Middleware {
    // eslint-disable-next-line no-unused-vars
    return () => next => action => {
        let formattedPayload = "";
        if (action.toString !== Object.prototype.toString) {
            formattedPayload = action.toString();
        } else if (typeof action.payload !== "undefined") {
            formattedPayload = inspectObject(action.payload);
        } else {
            formattedPayload = inspectObject(action);
        }

        console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
        return next(action);
    };
}
