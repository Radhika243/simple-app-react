import React,{useReducer,useEffect} from 'react'
import axios from 'axios';


const initialState ={
    loading : true,
    error : '',
    post : {}
}

const reducer = (currentState,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                error : 'Something went wrong',
                post : {}
            }
        default:
            return currentState
    }
}

function DataFetchingUseReducer() {
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
           dispatch({type : 'FETCH_SUCCESS', payload : response.data})
        })
        .catch(error => {
           dispatch({type : 'FETCH_ERROR'})
        })
    },[])


    return (
        <>
             {state.loading ? 'Loading the data' : state.post.title}
             {state.error ? state.error : null}
        </>
    )
}

export default DataFetchingUseReducer;
