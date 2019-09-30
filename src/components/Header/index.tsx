import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import Logo from "@res/logo.svg";

import s from "./index.scss";

class Header extends React.Component {
    public render() {
        return (
            <header className={s.root}>
                <div className={s.container}>
                    <Logo className={s.logo} />
                    <h1 className={s.title}>Create React App</h1>
                    <h2 className={s.subtitle}>Set up a modern web app by running one command.</h2>
                </div>
            </header>
        );
    }
}

export default withStyles(s)(Header);
