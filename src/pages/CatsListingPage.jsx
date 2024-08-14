import React from 'react'
import bgImage from '../assets/catBg.png'
import CatListingComponent from '../components/core/CatListing/CatListingComponent'

const CatsListingPage = () => {
  return (
    <div className='relative h-full min-h-screen min-w-screen w-full bg-slate-700'
        style={{
            backgroundImage: `url(${bgImage})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
        }}
    >
        <div className='overflow-x-auto w-full'>
            <CatListingComponent />
        </div>
    </div>
  )
}

export default CatsListingPage