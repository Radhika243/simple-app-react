import React from 'react';
import { UserConsumer } from './userContext';



class ComponentF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // <div>
            //   Component F
            // </div>
            //Component C will provide the username to Component F 
            <UserConsumer>
                {
                    (username)=>{
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        );
    }
}



export default ComponentF;
