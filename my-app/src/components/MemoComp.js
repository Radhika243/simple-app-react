import React from 'react'

function MemoComp({name}) {
    console.log(`Memo component -- Higher order component`)

    return (
        <>
            <div>{name}</div>
        </>
    )
}

export default React.memo(MemoComp);
