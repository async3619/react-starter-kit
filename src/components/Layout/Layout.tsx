/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import s from "./Layout.scss";

interface Props {
    children: React.ReactNode;
}

class Layout extends React.Component<Props> {
    public render() {
        const { children } = this.props;

        return <div>{children}</div>;
    }
}
export default withStyles(s)(Layout);
