import React from 'react'

export default class Display extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="scoreboard">
                <h2>Strikes: {this.props.state.strikes}</h2>
                <h2>Balls: {this.props.state.balls}</h2>
                <h2>Hits: {this.props.state.hits}</h2>
            </div>
        )
    }
}
