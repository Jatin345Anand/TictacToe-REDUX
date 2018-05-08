import React from 'react';
import {store} from '../store/store';
import BUTTONOPEARTION from '../models/buttonoperation';
class BUTTONS extends React.Component {
    constructor(props) {
        super(props);
        this.isZeroOrX = false;
        this.isGAMEOVER=false;
        this.Playername="";
        this.playername=false;
        this.BUTTONHTML = "";
        this.H1="";
        this.H2="";

        this.state = {
            Playername: ""
        };
    }
    C1(event) {
        this.BUTTONHTML = this.printXorZero(event);
        var Txt=this.printXorZero(event);
         
        store.dispatch({
            type: '1',
            payload: {
                ButtonText:  Txt
            }
        })
    }
    C2(event) {
        this.BUTTONHTML = this.printXorZero(event);
       
        store.dispatch({
            type: '2',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C3(event) {
        this.BUTTONHTML = this.printXorZero(event);
        
        store.dispatch({
            type: '3',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C4(event) {
        this.BUTTONHTML = this.printXorZero(event);
         
        store.dispatch({
            type: '4',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C5(event) {
        this.BUTTONHTML = this.printXorZero(event);
       
        store.dispatch({
            type: '5',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C6(event) {
        this.BUTTONHTML = this.printXorZero(event);
       
        store.dispatch({
            type: '6',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C7(event) {
        this.BUTTONHTML = this.printXorZero(event);
       
        store.dispatch({
            type: '7',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C8(event) {
        this.BUTTONHTML = this.printXorZero(event);
         
        store.dispatch({
            type: '8',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
    C9(event) {
        this.BUTTONHTML = this.printXorZero(event);
       
        store.dispatch({
            type: '9',
            payload: {
                ButtonText: this.printXorZero(event)
            }
        })
    }
   WIN(){
       console.log(`win in input button`);
       this.H1="GAME OVER";
       this.H2="You Win this game ! Congratulation...";
       this.setState({H1:"GAME OVER",H2:"You Win this game ! Congratulation..."})
       store.dispatch({
           type:'WIN',
           payload:{
               H1:"GAME OVER",
               H2:"You Win this game ! Congratulation..."
           }
       });
   }
    printXorZero(event) {
        //this.isGAMEOVER=BUTTONOPEARTION.GO;
        this.isGAMEOVER=BUTTONOPEARTION.TellGO();
        if( BUTTONOPEARTION.TellGO() ){
            console.log(`you winf...`);
            this.WIN();
        } 
        if (event.target.innerHTML == "" && !this.isGAMEOVER) {
             
            if (this.isZeroOrX) {
                event.target.innerHTML = "X";
            } else {
                event.target.innerHTML = "0";
            }

           this.playername=!this.playername;
            this.isZeroOrX = !this.isZeroOrX;
            this.printPlayerName();
        }
       
        return event.target.innerHTML;
    }
     printPlayerName(){
      if(this.playername){
          this.Playername="ONE";
          this.setState({Playername:"ONE"});
      }
      else{
          this.Playername="TWO";

          this.setState({Playername:"TWO"});
      }
     }
    render() {
        return ( 
        <div>

{/* onClick={this.C1.bind(this)} */}

            <div id = "DIV">
            <span  >PLAYER: </span><span id="pn1">{this.state.Playername}</span>
          
            <table >
            <tr>
                    <td><button  onClick={this.C1.bind(this)} ></button></td>
                    <td><button onClick={this.C2.bind(this)}></button></td>
                    <td><button onClick={this.C3.bind(this)}></button></td>
                </tr>
                <tr>
                    <td><button onClick={this.C4.bind(this)}></button></td>
                    <td><button onClick={this.C5.bind(this)}></button></td>
                    <td><button onClick={this.C6.bind(this)}></button></td>
                </tr>
                <tr>
                    <td><button onClick={this.C7.bind(this)}></button></td>
                    <td><button onClick={this.C8.bind(this)}></button></td>
                    <td><button onClick={this.C9.bind(this)}></button></td>
                </tr>
               </table> 
            
              </div>
              <h2   id="Ans">{this.state.H2}</h2>
        <h1   id="Winp">{this.state.H1}</h1>
            </div>

        );
    }
}
export default BUTTONS;