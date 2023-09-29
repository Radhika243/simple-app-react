import React from 'react'

//  function ForwardRef() {
    

//     return (
//         <>
//           <input type='text'/>  
//         </>
//     )
// }

const ForwardRef = React.forwardRef ((props,ref)=>{//pass ref attribute to native input element
    //Forwarded the ref component from parent to native ref component 
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

export default ForwardRef;
