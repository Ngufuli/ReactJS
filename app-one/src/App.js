import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component{
  state = {

  }

  render(){
    return <div>
      <Header/>
      <Body/>
      <Footer />
    </div>
  }
}

export default App;