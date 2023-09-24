import React from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends React.Component{
    constructor(props){
        super(props)

        this.state={
            parentName : "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent=(childName)=>{
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <>
                <ChildComponent greetHandler={this.greetParent}/>
                <h1>Parent - {this.state.parentName}</h1>
               
            </>
        )
    }
 }

 export default ParentComponent;