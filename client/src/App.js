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
      <Dashboard state={this.state} />
      <Display  state={this.state}/>
    </div>
  );
  }
}

export default App;
