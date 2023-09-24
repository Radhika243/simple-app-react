import React from "react";

class FormHandler extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            username : ""
        }

        this.state={
            comment:""
        }

        this.state={
            topic:""
        }
    
       
    }

    handleUserName=(event)=>{
        this.setState({
            username : event.target.value
        })
    }

    handleComments=(event)=>{
        this.setState({
            comment : event.target.value
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`Hi ${this.state.username}, Added Comments(if any) : ${this.state.comment} and your topic : ${this.state.topic}`)
        event.preventDefault();  // this will not remove the content which is already entered in the form after submitting the info to browser
    }
    render(){
        let heading = {
            fontSize : '50px',
            textAlign : 'center',
            color: 'Violet'
        }
       
        const {username,comment,topic} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <h1 style={heading}> Form Template </h1>
                <div>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={this.handleUserName}></input>
                </div><br></br>
                <div>
                    <label>Comments</label>
                    <textarea value={comment} onChange={this.handleComments}></textarea>
                </div>
                <div><br></br>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="java">Java</option>
                    </select>
                </div><br>
                </br>
                <br></br>
                <button type="submit">SUBMIT</button>
            </form>
        )
    }
}

export default FormHandler;