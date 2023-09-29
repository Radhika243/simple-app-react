import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasError : false
        }
    }

    static getDerivedStateFromError(error) { // Rarely Used
        return { hasError: true }
    }
    
    

    render() {
        if(this.state.hasError)
        {
            return <h1>Something went wrong</h1>
        }
        return this.props.children // Refers to the component we are rendering
    }
}



export default ErrorBoundary;
