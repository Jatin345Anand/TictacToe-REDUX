import React from 'react';
import {connect} from 'react-redux';
class OutPutBUTTON extends React.Component{
     constructor(props){
         super(props);
         this.state={
           
          }
     }
      render(){
        return(
            <div>
                  <h2   id="Ans">{this.props.H2}</h2>
        <h1   id="Winp">{this.props.H1}</h1>
             </div>
        );
     }
    
}
 const mapStateToProps = (state)=>{
     console.log(state.v10);
     console.log(`${state.V1}` && `${state.V3}` && `${state.V4}` &&`${state.V7}` && `${state.V9}`  );
     return {
         H2:state.H2,
         H1:state.H1
       }
}
export default connect(mapStateToProps)(OutPutBUTTON);
  

