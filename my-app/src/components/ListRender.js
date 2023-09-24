import React from "react";

class ListRender extends React.Component{
render(){
    const names = ["Alice","John","Bruce","John"]
    const nameList = names.map((name,index)=>{
        return <h3 key={index}>{index}-{name}</h3>
    })
    return(
        <div>
            <h1>Rendering the List</h1>
            <div>
                {
                    // names.map((name,index)=>{                            //1st approach --> adding names.map in render method directly
                    //    return <h2 key={index}>{index}-{name}</h2>
                    // })

                    <div>{nameList}</div>
                }
            </div>
        </div>
    )
}
}

export default ListRender;