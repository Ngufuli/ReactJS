import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header desc="Hello world" name="Hakuna Matata"/>
      <Body name="This is the body Written by NavQuery"/>
      <Footer />
    </div>
    
  );
}

export default App;
