import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        
    }

    componentDidMount() {
        
    }

    render() {
        console.log('PureComp comp')
        return (
            <>
                <div>Pure Component</div> {this.props.name}
            </>
        )
    }
}

export default PureComp;