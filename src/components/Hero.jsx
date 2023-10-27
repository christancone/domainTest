import React from 'react'
import { www } from '../assets'
import styles from '../style'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div>
        <span className='text-5xl text-gradient font-poppins'>Easy, Fast, and Reliable Domain Registration.
        <br/><br/>
        Get Registered with just few clicks
        </span>
      </div>
      

      <div className="w-full md:w-auto m-10">
        <img src={www} alt="wwwImage" className="w-full rounded-xl" />
      </div>
      <div>
        

        

      </div>

    </div>
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[30%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[30%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[20%] h-[40%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

    </>
  )
}

export default Hero;
