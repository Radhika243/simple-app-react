import React from 'react';


class RegularComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('regular comp')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}



export default RegularComp;
