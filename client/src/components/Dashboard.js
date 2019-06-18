import React from 'react'

export default class Dashboard extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="buttons">
                <button>Strike</button>
                <button>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        )
    }
}
