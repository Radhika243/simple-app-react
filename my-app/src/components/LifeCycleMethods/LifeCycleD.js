import React from 'react';



class LifeCycleD extends React.Component {
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
        console.log('LD componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LD shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LD getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LD componentDidUpdate')
    }
    render() {
        console.log('LD render')

        return (
            <div>
                
                LifeCycleD
                
            </div>
        );
    }
}



export default LifeCycleD;