import React from 'react';


class LifeCycleA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log('LB Constructor')
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log('LB getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LB componentDidMount')
    }

    render() {
        console.log('LB render')

        return (
            <div>
                LifeCycleB
            </div>
        );
    }
}



export default LifeCycleA;
