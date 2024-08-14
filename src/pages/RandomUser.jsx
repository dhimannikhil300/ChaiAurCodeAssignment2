import React from 'react'
import { RandomUserCard } from '../components/core/RandomUser'
import bgImage from '../assets/randomuser.png'

const RandomUser = () => {
  return (
    <div className='w-full h-full min-h-screen flex justify-center items-center bg-black'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <RandomUserCard />        

    </div>
  )
}

export default RandomUser