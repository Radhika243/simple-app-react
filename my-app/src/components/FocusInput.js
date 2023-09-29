import React from 'react';
import Input from './input';

//parent comp
class FocusInput extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}



export default FocusInput;
