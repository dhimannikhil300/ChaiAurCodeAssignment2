import React from 'react'
import { RandomJokes } from '../components/core/RandomJokes'
import chaiAurCodeImage from '../assets/Screenshot 2024-08-14 010320.png'
import bgImage from '../assets/xBgImage.jpg'

const RandomJokesPage = () => {
  return (
    <div className='relative w-full h-full min-h-screen flex justify-center items-center bg-slate-300'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <RandomJokes />
        <div className='absolute bottom-10 right-10'>
          <a target='_blanck' href='https://chaicode.com/'>
            <img className='rounded-2xl' src={chaiAurCodeImage} alt='chaiAurCode' width={100} />
          </a>
        </div>
    </div>
  )
}

export default RandomJokesPage