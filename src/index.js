import ReactDOM from "react-dom";

import React, { Component } from "react";



const DemoComponent=React.forwardRef((props,ref)=>{

  function testClick(){

    ref.current.focus();

  }

  return(

    <button onClick={testClick}>Click</button>

  )

});



class Elevator extends React.Component{

  constructor(props){

    super(props);

    this.elevatorRef=React.createRef();

  }



  render(){

    return(

      <div>

        <h2>Welcome to Elevator Ordering Screen...</h2>

        <p>

          <label>Elevator Name : <input ref={this.elevatorRef} type="text"></input></label>

        </p>

        <p>

          <label>Elevator Speed : <input type="text"></input></label>

        </p>

        <p>

          <label>Elevator Load : <input type="text"></input></label>

        </p>

        <Summary innerRef={this.elevatorRef}></Summary>

        <DemoComponent ref={this.elevatorRef}></DemoComponent>

      </div>

    );

  }

}



class Summary extends React.Component{

  constructor(props){

    super(props);

  }

  

  focusInput=()=>{

    this.props.innerRef.current.focus();

  }

  render(){

    return (

      <div>

        <h2>Summary Details...</h2>

        <p onClick={this.focusInput}>

          <label>Elevator Name : <b>Name - 1</b></label>          

        </p>

        <p>

          <label>Elevator Speed : <b>10 m/s</b></label>

        </p>

        <p>

          <label>Elevator Load : <b>550 Kg</b></label>

        </p>

      </div>

    );

  }

}



function testComponent(){

  

  let testRef=null;

  function handleClick() {

    testRef.focus();

  }



  return (

    <div>

      <input type="text" ref={e=>testRef=e} />

      <input type="button" value="Focus the text input" onClick={handleClick}/>

    </div>

  );

}

const element=<Elevator></Elevator>

ReactDOM.render(element,document.getElementById("root"));