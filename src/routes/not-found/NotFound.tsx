import React from "react";

interface Props {
    title: string;
}

class NotFound extends React.Component<Props> {
    public render() {
        const { title } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <p>Sorry, the page you were trying to view does not exist.</p>
            </div>
        );
    }
}

export default NotFound;
