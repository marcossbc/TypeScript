import React, { useState } from 'react'
interface AgeProps{
    onSubmit:(age:number) => void;

}
const AgeForm = ({ onSubmit }: AgeProps) => {
    const [age, setAge]= useState<number>(0)

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(age <18){
         alert("Age must be 18 or older");
        return;
    }
    onSubmit(age)
}
  return (
    <form onSubmit={handleSubmit}>

        <input type="number"
         value={age}
        onChange={(e) =>setAge(parseInt(e.target.value) || 0)}/>

        <button type='submit'>Submit</button>

    </form>
  )
}

export default AgeForm
