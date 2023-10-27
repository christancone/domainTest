import React from 'react'
import { www } from '../assets'
import styles from '../style'

const Hero = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <span className='text-5xl text-gradient font-poppins'>Easy, Fast, and Reliable Domain Registration.</span>
        <br/><br/>
        <span className='text-gradient2 text-5xl'> Get Registered with just few clicks</span>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={www} alt="wwwImage" style={{width: '120%', height: '120%'}} className="relative z-[5]" />


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </div>

  )
}

export default Hero
