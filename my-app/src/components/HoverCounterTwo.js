import React from 'react';


class HoverCounterTwo extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0
    //     };
    // }

    // incrementCount = ()=>{
    //     this.setState((prevState)=>{
    //         return {count : prevState.count + 1}
    //     })
    //     console.log(this.state.count)
    // }

    render() {
        const {count,incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        );
    }
}



export default HoverCounterTwo;
