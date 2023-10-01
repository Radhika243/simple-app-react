import React,{useState} from 'react'

function HookCounterArray() {
    const [items,setItems] = useState([])

    const addItems = () =>{
        setItems ([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 10 ) + 1 // Random numbers from 1 to 10
        }])
    }

    return (
        <>
            <button onClick={addItems}>Add Item</button>
            <ol>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ol>
        </>
    )
}

export default HookCounterArray;
