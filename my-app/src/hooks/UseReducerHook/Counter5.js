import React,{useReducer} from 'react'
//Local state management

const initialState = 0;
//2nd step
//action ---> instruction to reducer function, based on the action specified the reducer function performs necessary state transactions
const reducer = (currentState,action) =>{
    //return newState
    switch(action){
        case 'increment':
            return currentState + 1;
            break;
        case 'decrement':
            return currentState - 1;
            break;
        case 'reset':
            return initialState;
            break;
        default:
            return currentState
    }

}
function Counter5() {
   

    //value --> to display in JSX and we need the way to use reducer function in JSX
    const [count,dispatch] =  useReducer(reducer,initialState) //2nd step
    const [count2,dispatch2] = useReducer(reducer,initialState)
    //below is 3rd step
    return (
        <>
            <div>COUNT 1 : {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
            <div>COUNT 2: {count2}</div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </>
    )
}

export default Counter5;