import React, { useState } from 'react'


interface EmailPropose{
    onSubmit:(input:string)=> void;
}
const EmailForm = ({onSubmit} : EmailPropose) => {

    const [input, setInput] = useState<string>("")

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit(input)

    }
   return (
    <div>
        {/* <input 
        type="email" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter your email"
        className='border p-2 rounded'
        /> */}
        {/* <button onClick={() => alert(`Email submitted: ${input}`)} className='ml-2 bg-blue-500 text-white p-2 rounded'>Submit</button> */}
        <form onSubmit={handleSubmit}>
            <input type="email"
        value={input}
        onChange={(e) =>setInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EmailForm
