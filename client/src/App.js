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
     if(this.state.strikes < 2) {
      this.setState({strikes: this.state.strikes + 1})
     } else {
      this.setState({strikes: 0})
     }
  }

  ball = () => {
    if(this.state.balls < 3) {
      this.setState({balls: this.state.balls + 1})
     } else {
      this.setState({balls: 0})
     }
  }

  foul = () => {
    if(this.state.strikes < 2 ) {
      this.setState({strikes: this.state.strikes + 1})
     } else if (this.state.strikes === 2) {
      this.setState({strikes: 2})
     }
  }

  hit = () => {
    this.setState({hits: this.state.hits + 1})
  }
}

export default App;
