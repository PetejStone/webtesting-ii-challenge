import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  }
  
  render() {
  return (
    <div className="App">
      <Dashboard state={this.state} strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit}  />
      <Display  state={this.state}/>
    </div>
  );
  }

   //functions
   strike = () => {
    this.setState({strikes: this.state.strikes + 1})
  }

  ball = () => {
    this.setState({balls: this.state.balls + 1})
  }

  foul = () => {
    this.setState({fouls: this.state.fouls + 1})
  }

  hit = () => {
    this.setState({hits: this.state.hits + 1})
  }
}

export default App;
