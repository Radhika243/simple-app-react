import React from "react";

//incrementNumber is used for incrementing the number in doing the multiple clicks based on the number passed in the click,Hover and KeyPress counter files
const withCounter = (WrappedComponent,incrementNumber)=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count:0
            };
        }
    
        incrementCount = () =>{
            this.setState((prevState)=>{
                return {count : prevState.count + incrementNumber}
            })
             console.log(this.state.count)
        }
        render(){
            return <WrappedComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            //important to pass rest of the props
            {...this.props}  // HOC adds 2 props to the app component simply process down whatever props has been specified using spread operator
            />
        }
    }
    return WithCounter;
}

export default withCounter;