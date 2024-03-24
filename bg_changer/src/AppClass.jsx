import { Component } from "react";
import "./App.css";

class AppClass extends Component
{

    constructor()
    {
        super()
        this.state={
            background:'#FFFFFF'
        }
    }

  change =()=>{
        console.log(Math.round(Math.random()*10000000).toString(16));

    const random_color="#"+Math.round(Math.random()*10000000).toString(16);
    console.log(random_color);
    this.setState({ background: random_color });

    }




    render()
    {
        return(

        <div className="changer" style={{backgroundColor:this.state.background}}>
      <button onClick={this.change} >CHANGE</button>
      <h1>CLASS COMPONENT</h1>
        </div>

        )
    }
}

export default AppClass;