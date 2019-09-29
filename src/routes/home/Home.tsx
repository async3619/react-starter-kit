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

import s from "./Home.scss";

class Home extends React.Component {
    public render() {
        return <div className={s.root}>Hello World from React Starter Kit!</div>;
    }
}

export default withStyles(s)(Home);
