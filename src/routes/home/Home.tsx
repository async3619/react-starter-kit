import React from "react";

import withStyles from "isomorphic-style-loader/withStyles";

import compose from "@utils/compose";
import connect from "@utils/connect";

import { GuestsQuery } from "@generated/graphql.client";

import s from "./Home.scss";

type GuestItem = GuestsQuery["guests"][0];

interface Props {
    guests: GuestsQuery["guests"];
    initialTime: number;
}

class Home extends React.Component<Props> {
    public renderGuest = (guest: GuestItem) => {
        return (
            <div key={guest.id}>
                <h2>{guest.title}</h2>
                <p>{guest.content}</p>
            </div>
        );
    };
    public render() {
        const { guests, initialTime } = this.props;

        return (
            <div className={s.root}>
                <h3>Initial Time: {initialTime}</h3>
                {guests.map(this.renderGuest)}
            </div>
        );
    }
}

export default compose(
    connect(state => ({
        initialTime: state.runtime.initialTime,
    })),
    withStyles(s),
)(Home);
