import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import Logo from "@res/logo.svg";

import s from "./index.scss";

class Navigation extends React.Component {
    public render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Logo className={s.logo} />
                    <h2 className={s.title}>Create React App</h2>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Navigation);
