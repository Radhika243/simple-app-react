import React from 'react'

function CountOO({text,count}) {
    console.log(`rendering ${text}`)

    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CountOO);
