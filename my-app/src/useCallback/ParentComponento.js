import React,{useState,useCallback} from 'react'
import Title from './Title';
import CountOO from './CountOO';
import Button from './Button';
//UseCallBack -- used to optimize the performance
//Every component is re-rendering everytime, this decreases the performance

function ParentComponento() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const incrementSalaryBy1000 = useCallback(() =>{
        setSalary(salary + 1000)
    },[salary])



    return (
        <>
        <Title/>
        <CountOO text="age" count={age}></CountOO>
        <Button handleClick={incrementAge}>increment Age</Button>

        <CountOO text="salary" count={salary}></CountOO>
        <Button handleClick={incrementSalaryBy1000}>increment Salary</Button>

            
        </>
    )
}

export default ParentComponento;