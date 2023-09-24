import React from 'react'
import '../styleSheet.css';

 function StyleSheet(props) {
    
    let className = props.primary ? 'primary':'sec'
    return (
        <>
            {/* first approach
            <h1 className='primary'> StyleSheet </h1> */}
        <div>
            <h1 className={`${className} font-xmu`}> Style </h1>
        </div>
            
        </>
    )
}

export default StyleSheet;