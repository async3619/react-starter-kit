import loaderUtils from "loader-utils";
import path from "path";
import getCSSModuleLocalIdent from "react-dev-utils/getCSSModuleLocalIdent";

export default function getLocalIdent(isDebug: boolean) {
    return (context: any, localIdentName: any, localName: any, options: any) => {
        if (isDebug) {
            // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
            const fileNameOrFolder = context.resourcePath.match(/index\.(css|scss|sass)$/) ? "[folder]" : "[name]";

            // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
            const hash = loaderUtils.getHashDigest(
                Buffer.from(path.posix.relative(context.rootContext, context.resourcePath) + localName),
                "md5",
                "base64",
                5,
            );

            // Use loaderUtils to find the file or folder name
            const className = loaderUtils.interpolateName(
                context,
                `${fileNameOrFolder}_${localName}__${hash}`,
                options,
            );

            // remove the .module that appears in every classname when based on the file.
            return className.replace(".module_", "_");
        }

        console.info(context.resourcePath, localIdentName, localName);

        return isDebug
            ? getCSSModuleLocalIdent(context, localIdentName, localName, options)
            : `_${loaderUtils.getHashDigest(
                  Buffer.from(path.posix.relative(context.rootContext, context.resourcePath) + localName),
                  "md5",
                  "base64",
                  5,
              )}`;
    };
}
