// Declare globals
// eslint-disable-next-line no-unused-vars
declare const __DEV__: boolean;
declare const __WEB__: boolean;
declare const __CLIENT__: boolean;
declare const __NODE__: boolean;
declare const __SERVER: boolean;

// Extend globals
interface Window {
    ga: any;
    App: any;
}
interface NodeModule {
    hot: any;
}

declare module NodeJS {
    import { Connection } from "typeorm";

    interface Global {
        connection?: Connection;
    }
}

// Extend existing modules
declare module "child_process" {
    interface ChildProcess {
        host?: string;
    }
}

// Declare modules for non-typed packages
declare module "isomorphic-style-loader/StyleContext";
declare module "react-deep-force-update";
declare module "webpack-hot-middleware/client";
declare module "react-dev-utils/launchEditorEndpoint";
declare module "react-dev-utils/errorOverlayMiddleware";
declare module "react-dev-utils/typescriptFormatter";
declare module "react-error-overlay";
declare module "react-test-renderer";
declare module "apollo-link-logger";
declare module "isomorphic-style-loader/withStyles" {
    /* eslint no-underscore-dangle:0 */
    /* eslint no-undef:0 */
    const _default: <T>(
        s1: string,
        s2?: string,
        s3?: string,
        s4?: string,
        s5?: string,
    ) => /* eslint no-undef:0 */
    <T>(arg0: T) => T;
    /* eslint import/export:0 */
    export default _default;
}
declare module "isomorphic-style-loader/useStyles" {
    /* eslint no-underscore-dangle:0 */
    /* eslint no-undef:0 */
    const _default: (s1: string, s2?: string, s3?: string, s4?: string, s5?: string) => void;
    /* eslint import/export:0 */
    export default _default;
}

// Declare non-ts modules to be loaded by webpack loaders
declare module "*.css";
declare module "*.scss";
declare module "*.md";
declare module "*.png";
declare module "*.graphql" {
    /* eslint no-unused-vars:0 */
    import { DocumentNode } from "graphql";

    /* eslint vars-on-top:0 */
    /* eslint no-var:0 */
    var d: DocumentNode;
    /* eslint import/export:0 */
    export default d;
}
declare module "!isomorphic-style-loader!*";
declare module "*.svg" {
    interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

    const value: SvgrComponent;
    export default value;
}
