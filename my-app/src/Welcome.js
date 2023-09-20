import React from 'react';

const Welcome = ()=>{
    return (
        //normal approach
        // <div>
        //     <h1> Hanuman Sri Ram </h1>
         //   <h1>  Sri Ram Hanuman </h1>
        // </div>

        React.createElement('div',null,React.createElement('h1',null,'Sri Ram'))
    
    )
}

export default Welcome;