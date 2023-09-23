import React from "react";

// class ClassComp extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hi Class Component</h1>
//                 <h4>Shri Ram Jai Ram Jai Jai Ram </h4>
//             </div>
//         )
//     }
// }

const ClassComp = ((props)=>{
    
        return(
            <div>
                <h1>Hi {props.name}</h1>
            </div>
        )
    }
)

export default ClassComp;