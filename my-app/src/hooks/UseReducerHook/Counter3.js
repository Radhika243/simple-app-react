import React,{useReducer} from 'react'


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
function Counter3() {
   

    //value --> to display in JSX and we need the way to use reducer function in JSX
    const [count,dispatch] =  useReducer(reducer,initialState) //2nd step
    //below is 3rd step
    return (
        <>
            <div>COUNT : {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default Counter3;