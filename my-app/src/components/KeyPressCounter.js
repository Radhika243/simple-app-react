import React from 'react';
import withCounter from './withCounter';


class KeyPressCounter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count:0
    //     };
    // }

    // incrementCount = () =>{
    //     this.setState((prevState)=>{
    //         return {count : prevState.count + 1}
    //     })
    //     console.log(this.state.count)
    // }

    render() {
        const {incrementCount} = this.props;
        return (
            <div>
                <input onKeyUp={incrementCount} />
            </div>
        );
    }
}



export default withCounter(KeyPressCounter,2);
