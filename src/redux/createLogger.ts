import { Middleware } from "redux";

const createLogger: () => Middleware = (__WEB__ ? require("./createLogger.client") : require("./createLogger.server"))
    .default;

export default createLogger;
