import React,{useState,useEffect} from 'react'
import axios from 'axios';

function DataFetching(props) {
    const [posts,setPosts] = useState([])
    const [id,setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(error =>{
            console.log(error)
            
        },[])
    })
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <div>{posts.title}</div>
            {/* //used for getting the entire title values */}
            {/* <ul>
                {
                    posts.map(post =><li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching;
