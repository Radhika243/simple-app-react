import React from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';


class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Ram"
        };
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : "Ram"
            })
        },2000)
    }

    render() {
        console.log('*********************parent comp***********************')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}


export default ParentComp;
