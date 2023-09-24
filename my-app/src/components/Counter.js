import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count : 0
        }
    }
    clickHandler(){
       this.setState({
            count : this.state.count + 1
       })
       console.log(this.state.count)
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>Counter - {this.state.count}</h1>
                <button onClick={this.clickHandler.bind(this)}>Clicked {count} times</button>
            </div>
        )
    }
}

export default Counter;