import React from "react";

class MessageChange extends React.Component{
    constructor(props){
        super(props)

        this.state={
            message : "Hi Visitor Good morning"
        }
    }
    // SetState is causing the error so better to use the bind(this) in the button onClick method
    // greetHandler(){
    //     this.setState({
    //         message: "Hi Admin, Good morning"
    //     })
    //     console.log(this.state.message)
    // }

    // OR instead use a arrow function to remove the setState error
    greetHandler=(()=>{
        this.setState({
            message : "Hi Admin, Good morning"
        })
        console.log(this.state.message)
    })
    render(){
        return(
            <div>
                <h1>Message - {this.state.message}</h1>
                {/* <button onClick={this.greetHandler.bind(this)}> Greet </button> */}
                <button onClick={this.greetHandler}>GREET</button>
            </div>
        )
    }
}

export default MessageChange;