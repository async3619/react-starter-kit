import React from "react";

import withStyles from "isomorphic-style-loader/withStyles";

import { GuestsQuery } from "@generated/graphql.client";

import s from "./Home.scss";

type GuestItem = GuestsQuery["guests"][0];

interface Props {
    guests: GuestsQuery["guests"];
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
        const { guests } = this.props;

        return <div className={s.root}>{guests.map(this.renderGuest)}</div>;
    }
}

export default withStyles(s)(Home);
