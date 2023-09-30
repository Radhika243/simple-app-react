import React from 'react';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        );
    }
}



export default User;
