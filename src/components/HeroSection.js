import React from 'react'
import ShrifBchcha2 from "../assets/ShrifBchcha2.jpg"

const HeroSection = () => {
  return (
    <div className=' flex flex-wrap justify-between mt-[90px]'>
      {/* left Part */}
      <div className='  w-[50vw] text-white'>
        <h1>
          Hello 
        </h1>
        <h1>I'm Avinash Gupta</h1>
        <h1>Full Stack Developer</h1>
        <p>
        Hi there! My name is Piyush Garg and I’m 
        a software engineer with over 5 years of experience in the industry.
         I love all things tech and coding, and on my channel, 
         I share my knowledge and experience with others.
        </p>
      </div>

      {/* Pic */}
      <div className='flex  '>
        <img className='h-[400px] w-[400px] rounded-full' src={ShrifBchcha2} alt="pic"/>
      </div>

    </div>
  )
}

export default HeroSection