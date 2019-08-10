import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import One from './One';

class App extends Component {
  state = {  }
  render() { 
    return ( <div>
      <Header/>
      <One/>
    </div> );
  }
}
 
export default App;