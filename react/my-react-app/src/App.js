import React from 'react';
import './App.css';
import SetState from './components/SetState';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SetState></SetState>
      </div>
    );
  }
}
