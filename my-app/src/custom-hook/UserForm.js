import React from 'react'
import UseInput from './useInput'

function UserForm() {
    // const [firstName,setFirstName] = useState('')
    //const [lastName,setLastName] = useState('')
    
    const [firstName,bindFirstName,resetFirstName]= UseInput('')
    const [lastName,bindLastName,resetLastName] = UseInput('')
    
    // const firstNameHandler = (event) =>{
    //     setFirstName(event.target.value)
    // }
    // const lastNameHandler = (event) =>{
    //     setLastName(event.target.value)
    // }

    const submitHandler = (event) =>{
        event.preventDefault()
        alert(`Entered first name : ${firstName} and last name : ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return (
        <>
        <form onSubmit={submitHandler}>
           <div>
                <label>First Name : </label>
                {/* <input type = "text" value={firstName}  onChange={firstNameHandler}/> */}
                {/* //replace above LineRender with */}
                <input type = "text" {...bindFirstName}/>
           </div>
           <div>
                <label>Last Name : </label>
                <input type = "text" {...bindLastName}/>
           </div>
           <button type='submit'>Submit</button>
            
        </form>
            
        </>
    )
}

export default UserForm;
