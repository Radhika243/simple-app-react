import React from 'react';


class ClassMouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x : 0,
            y : 0
        };
    }

    logMousePosition = e =>{
        this.setState({x : e.clientX, y:e.clientY})
    }

    componentDidMount=()=>{
        window.addEventListener('mousemove',this.logMousePosition)
    }

    componentWillUnmount=()=>{
        console.log(`unmouting or cleanup code`)
        window.removeEventListener('mouseover',this.logMousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        );
    }
}



export default ClassMouse;
