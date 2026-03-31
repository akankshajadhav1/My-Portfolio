import React, { useState } from 'react'
import { Herobg, Note, Tech } from "../assets/index"
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  return (
    <div className='w-full min-h-screen bg-gray-200 pt-24 relative bg-[linear-gradient(135deg,#FFFBF1_2%,#FFF6E5_70%,#F5E6D3_100%)]'>
      <div className='radial-bg'>

      </div>
      <div className='bottom-left-gradient'></div>
      <div className='bottom-right-gradient'></div>
      <div className='absolute inset-0 z-10 flex justify-center pointer-events-none'>
        <img
          src={Herobg}
          alt="Hero Background"
          className="w-[230px] sm:w-[380px] md:w-[420px] lg:w-[640px] 
        grayscale contrast-125 brightness-110 object-contain object-bottom
        translate-y-[-30px] sm:translate-y-[-40px] md:translate-y-[-50px] lg:translate-y-[-60px] image-mask"
        />
      </div>
      <div className='relative z-20 flex flex-col justify-between items-center text-center pt-4 md:pt-8 pointer-events-none h-full' >
        <h2 className='text-[#645142] font-normal font-serif italic text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-widest mb-4 md:mb-0'>Hey, there</h2>

        <div className='w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-4 md:gap-0 mb-6 md:mb-8'>
          <div className="p-2 px-4 rounded-full bg-white shadow-sm flex items-center gap-2 mb-4 md:mb-0">
            <div className='w-6 h-6 bg-red-300 rounded-full flex items-center justify-center animate-pulse'>
              <div className='w-2 h-2 bg-red-600 rounded-full'>
              </div>
            </div>
            <span className='text-sm text-[#4B2E2B]'>Available for new opportunities</span>
          </div>
          <div className={`w-full max-w-[260px] h-[200px] md:h-[260px] bg-white rounded-2xl ${isClicked ? 'shadow-gray-500 -translate-y-6 scale-110' : 'shadow-lg'} flex flex-col items-center justify-center text-center p-3 md:p-5 border border-gray-100 transform transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl pointer-events-auto`} onClick={() => setIsClicked(!isClicked)}>
            <img
              src={Tech}
              alt="Tech Stack"
              className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 opacity-80"
            />
            <p className='text-xs md:text-sm text-center tracking-wider font-semibold font-sans text-[#A98B76] uppercase leading-tight'>“Crafting modern, DYNAMIC ANIMATION, MOTION DESIGN”</p>
          </div>

        </div>

        <div className='w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-4 md:gap-0 z-50 mb-3'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-[#A98B76] text-center md:text-left font-sans mb-4 md:mb-0'>I Am <br className='hidden md:block'></br>Akanksha</h1>
          <div className={`w-full max-w-[260px] h-[200px] md:h-[260px] bg-white rounded-2xl ${isClicked2 ? 'shadow-gray-500 -translate-y-6 scale-110' : 'shadow-lg'} 
flex flex-col items-center justify-center text-center p-3 md:p-5 
border border-gray-100
transform transition-all duration-300 ease-in-out
hover:-translate-y-3 hover:scale-105 hover:shadow-2xl pointer-events-auto`} onClick={() => setIsClicked2(!isClicked2)}>

            <img
              src={Note}
              alt="Tech Stack"
              className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-4 opacity-80"
            />

            <h2 className="text-base md:text-lg font-semibold text-[#4B2E2B] mb-1 md:mb-2">
              Tech Stack
            </h2>

            <p className="text-xs md:text-sm text-[#A98B76] font-semibold leading-relaxed text-center">
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
