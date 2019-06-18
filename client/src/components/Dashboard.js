import React from 'react'

export default class Dashboard extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="buttons">
                <button onClick={this.props.strike}>Strike</button>
                <button onClick={this.props.ball}>Ball</button>
                <button onClick={this.props.foul}>Foul</button>
                <button onClick={this.props.hit}>Hit</button>
            </div>
        )
    }

    
}
