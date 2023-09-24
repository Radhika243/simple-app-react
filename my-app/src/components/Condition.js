import React from "react";

class Condition extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false
        }
    
        
    }
    
    render(){
        //first Approach
    //    if(this.state.isLoggedIn){
    //     return <div>Welcome User</div>
    //    }else{
    //     return <div>Welcome Guest</div>
    //    }

    //2nd Approach
    let message;
    if(this.state.isLoggedIn){
        message = <h1>Welcome User</h1>
    }else{
        message = <h4>Welcome Guest</h4>
    }
    return <div>{message}</div>
    }

    //3rd approach
    // return (this.state.isLoggedIn) ? (<h1>Welcome User</h1>) : (<h4>Welcome Guest</h4>)

    //4th approach (short circuit operator)
    // return (
    //     this.state.isLoggedIn && <h1>Welcome User</h1>
    // )
    }
    


export default Condition;