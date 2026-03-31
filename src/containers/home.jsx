import React, { useState } from 'react'
import { Herobg, Note, Tech } from "../assets/index"
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  return (
    <div className='w-full min-h-[100svh] bg-gray-200 pt-14 md:pt-24 relative bg-[linear-gradient(135deg,#FFFBF1_2%,#FFF6E5_70%,#F5E6D3_100%)]'>
      <div className='radial-bg'>

      </div>
      <div className='bottom-left-gradient'></div>
      <div className='bottom-right-gradient'></div>
      
      {/* Desktop Background Image */}
      <div className='hidden md:absolute md:inset-0 md:z-10 md:flex md:justify-center md:pointer-events-none'>
        <img
          src={Herobg}
          alt="Hero Background"
          className="w-[180px] sm:w-[380px] md:w-[420px] lg:w-[640px] 
        grayscale contrast-125 brightness-110 object-contain object-bottom
        translate-y-[-20px] sm:translate-y-[-40px] md:translate-y-[-50px] lg:translate-y-[-60px] image-mask"
        />
      </div>
      
      <div className='relative z-20 flex flex-col md:flex-col justify-between items-center text-center pt-1 md:pt-8 h-full'>
        <h2 className='text-[#645142] font-normal font-serif italic text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl tracking-widest mb-3 md:mb-0'>Hey, there</h2>

        <div className='w-full flex flex-col md:flex-row items-center justify-between px-3 sm:px-4 md:px-12 gap-3 md:gap-0 mb-4 md:mb-8'>
          <div className="p-2.5 px-4 sm:px-6 rounded-full bg-white shadow-sm flex items-center gap-2 mb-2 md:mb-0">
            <div className='w-4 h-4 sm:w-6 sm:h-6 bg-green-300 rounded-full flex items-center justify-center animate-pulse'>
              <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full'>
              </div>
            </div>
            <span className='text-xs sm:text-sm md:text-base text-[#4B2E2B]'>Available for new opportunities</span>
          </div>
        </div>

        {/* Hero Image Section - Mobile Only */}
        <div className='w-full flex justify-center mb-4 md:hidden'>
          <img
            src={Herobg}
            alt="Hero Background"
            className="w-[200px] sm:w-[280px] grayscale contrast-125 brightness-110 object-contain"
          />
        </div>

        {/* I Am Akanksha and Tech Card Section */}
        <div className='w-full flex flex-col md:flex-row items-center justify-between px-3 sm:px-4 md:px-12 gap-3 md:gap-8 z-50 mb-3'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-[#A98B76] text-center md:text-left font-sans mt-4 md:mt-32 mb-4 md:mb-12'>I'M <br className=''></br>Akanksha</h1>
          <div className={`w-[85%] sm:w-auto md:max-w-[260px] h-auto md:h-[260px] bg-white rounded-2xl ${isClicked2 ? 'shadow-gray-500 -translate-y-6 scale-110' : 'shadow-lg'} 
flex flex-col items-center justify-center text-center p-3 sm:p-5 md:p-6 
border border-gray-100
transform transition-all duration-300 ease-in-out
hover:-translate-y-3 hover:scale-105 hover:shadow-2xl pointer-events-auto`} onClick={() => setIsClicked2(!isClicked2)}>

            <img
              src={Note}
              alt="Tech Stack"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 md:mb-4 opacity-80"
            />

            <h2 className="text-base sm:text-lg md:text-lg font-semibold text-[#4B2E2B] mb-2 md:mb-3">
              Skills: 
            </h2>

            <p className="text-xs sm:text-sm md:text-sm text-[#A98B76] font-semibold leading-relaxed text-center">
              Java, HTML, CSS, Tailwind CSS, React JS, Node JS, Express JS, MongoDB
            </p>

          </div>
          {/* <div className="p-2 rounded-full  bg-white shadow-sm">  hii </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
