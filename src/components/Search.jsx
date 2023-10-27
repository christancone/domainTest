import React, { useState } from 'react'
import { search } from '../assets'

const Search = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  window.addEventListener('resize', () => {
    setIsSmallScreen(window.innerWidth < 640);
  });

  return (
    <div className='flex justify-center items-center top-10 py-10'>
        <input placeholder={isSmallScreen ? '' : ' Explore LK Domains'} className='sm:w-100 w-full h-16 text-zinc-950 text-4xl font-semibold rounded-xl my-10 focus:border-b-red-700 focus:ring-2 font-poppins '></input>
        <span className='text-4xl'>.LK</span>
        <img src={search} className='h-16 ml-4 rounded-xl hover:animate-bounce cursor-pointer'/>
    </div>
  )
}

export default Search
