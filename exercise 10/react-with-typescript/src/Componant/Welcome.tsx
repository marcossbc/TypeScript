import React from 'react'


interface WelcomeProps{
    username:string,
    isPremium:boolean
}
const Welcome = ({ username, isPremium }: WelcomeProps) => {
  return (
    <div>
      {/* {isPremium ? `Welcome, ${username}! Thank you for being a premium member.` : `Welcome, ${username}! Consider upgrading to premium for more benefits.`}
       */}
       <p>{username.toLowerCase()}</p>
       <h2>
        {isPremium
          ? `Welcome back, premium user!`
          : `Welcome, guest`}
      </h2>

    </div>
  )
}

export default Welcome
