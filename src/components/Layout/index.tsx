import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import Header from "@components/Header";
import Navigation from "@components/Navigation";

import s from "./index.scss";

interface Props {
    children: React.ReactNode;
}

class Layout extends React.Component<Props> {
    public render() {
        const { children } = this.props;

        return (
            <div className={s.root}>
                <Navigation />
                <Header />
                {children}
            </div>
        );
    }
}
export default withStyles(s)(Layout);
