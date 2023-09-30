import React from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* //this is also rendering username */}
                Component E Context {this.context}
                <ComponentF /> 
            </div>
        );
    }
}


//2nd video changes
ComponentE.contextType= UserContext;


export default ComponentE;
