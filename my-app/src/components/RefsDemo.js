import React from "react";

class RefsDemo extends React.Component{
    constructor(props) {
        super(props)
    
       this.inputRef = React.createRef()
    
       
    }
    
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
       
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Click Here</button>
            </>
        )
    }
}

export default RefsDemo;