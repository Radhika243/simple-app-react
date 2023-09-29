import React from 'react';


class KeyPressCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    incrementCount = () =>{
        this.setState((prevState)=>{
            return {count : prevState.count + 1}
        })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.incrementCount} />
            </div>
        );
    }
}



export default KeyPressCounter;
