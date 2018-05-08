import React from 'react';
import BUTTONOPEARTION from '../models/buttonoperation';
  const BObject = {
    V1:"", V2:"",  V3:"", V4:"",V5:"", V6:"",V7:"", V8:"",V9:"" ,v10:"Jatin Anand"  ,H1:"",H2:"" 
}; 
export const ButtonReducer =(state=BObject,action)=>{
           
          switch (action.type) {
           case "1":{
            //    console.log(`1`);
            //    console.log(`${action.payload.ButtonText}`);
               BUTTONOPEARTION.V1=action.payload.ButtonText;
               BUTTONOPEARTION.isGameFinish();
               return{
                   V1:action.payload.ButtonText
                }  
            break; 
           } 
           case "2":{
            // console.log(`2`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V2=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V2:action.payload.ButtonText
             }  
             break;
            } 
           case "3":{
            // console.log(`3`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V3=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V3:action.payload.ButtonText
                  }    
               break;
           }
           case "4":{
            // console.log(`4`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V4=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V4:action.payload.ButtonText
                  }    
               break;
           }
           case "5":{
            // console.log(`5`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V5=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V5:action.payload.ButtonText
                  }    
               break;
           }
           case "6":{
            // console.log(`6`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V6=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V6:action.payload.ButtonText
                  }    
               break;
           }
           case "7":{
            // console.log(`7`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V7=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V7:action.payload.ButtonText
                  }    
               break;
           }
           case "8":{
            // console.log(`8`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V8=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
            return{
                V8:action.payload.ButtonText
                  }    
               break;
           }
           case "9":{
            // console.log(`9`);
            // console.log(`${action.payload.ButtonText}`);
            BUTTONOPEARTION.V9=action.payload.ButtonText;
            BUTTONOPEARTION.isGameFinish();
           
            return{
                V9:action.payload.ButtonText
                  }    
               break;
           }
           case "WIN":{
               console.log(`you win`);
               return{
                   H1:action.payload.H1,
                   H2:action.payload.H2
               }
           }

           default:
               return state;
       } 
}  