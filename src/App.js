import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BUTTONS from './components/square';
import OutPutBUTTON from './components/OutputButton';
class App extends Component {
  constructor(props){
    super(props);
  }
  inAPP(event){
    console.log(event.target.value);

  }
  render() {
    return (
      <div className="App">
        <h1> TIC TAC TOE REDUX </h1> 
           {/*   */}
           <BUTTONS
   
   />
   <OutPutBUTTON/>
      </div>
    );
  }
}

export default App;
