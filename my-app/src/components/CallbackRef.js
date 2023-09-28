import React from 'react';


class CallbackRef extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef=null;
        this.setcbRef = (element) =>{ // assign a DOM element to the cbRef which we created above
            this.cbRef = element;
        }
    }
//calls null when element unmounts
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    render() {
        return (
            <div>
                {/* //attach ref to input ref */}
                <input type='text' ref={this.setcbRef} />
            </div>
        );
    }
}



export default CallbackRef;
