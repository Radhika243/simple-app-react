import React from 'react';
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log('LA Constructor')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LA getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LA componentDidMount')
    }

    render() {
        console.log('LA render')

        return (
            <div>
                <LifeCycleB/>
                LifeCycleA
                
            </div>
        );
    }
}



export default LifeCycleA;
