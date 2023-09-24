import React from 'react';
import LifeCycleD from './LifeCycleD';



class LifeCycleC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log('LC Constructor')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LC getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LC componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LC shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LC getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LC componentDidUpdate')
    }

    changState=()=>{
        this.setState({
            name:"code"
        })
    }
    render() {
        console.log('LC render')

        return (
            <div>
                
                LifeCycleC
                <button onClick={this.changState}>Click</button>
                <LifeCycleD/>
            </div>
        );
    }
}



export default LifeCycleC;
