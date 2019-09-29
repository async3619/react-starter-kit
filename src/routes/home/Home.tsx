import React from "react";

import withStyles from "isomorphic-style-loader/withStyles";

import s from "./Home.scss";

class Home extends React.Component {
    public render() {
        return <div className={s.root}>Hello World from React Starter Kit!</div>;
    }
}

export default withStyles(s)(Home);
