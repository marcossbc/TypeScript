import React from 'react'


interface userProps{
    name: string,
    age?:number

}
const UserCard = (props: userProps) => {
  return (
    <div className='text-white text-2xl font-bold'>
    {props.name.toUpperCase()}
    {props.age !== undefined ? `Age: ${props.age}` : 'Age not provided'}
    </div>
  )
}

export default UserCard
