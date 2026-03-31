import React from 'react'
import { Profile } from "../assets/index"
import {Facebook , Instagram, Linkedin, Github} from 'lucide-react'
const About = () => {
  return (
   <section id="about" className='w-full min:h-screen bg-gradient-to-br from-[#FFFBF1] via-[#FFF6E5] to-[#F5E6D3] py-16 md:py-24 px-4 md:px-8'>
   
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-[#4B2E2B] mb-4 tracking-tight'>
            Who I am
          </h2>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-normal text-[#853953] font-serif mb-4 tracking-tight'>
            Pushing the boundaries of web development with creativity and passion.

          </h3>

          <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-7'>
            {/* left */}
            <div className='w-full space-y-2 flex flex-col items-center mt-5'>
            <div className='w-72 h-72 md:w-96 md:h-96 rounded-lg shadow hover:shadow-lg bg-[#2C2C2C] -rotate-3 hover:rotate-0 transition-all duration-150 ease-in-out flex items-center justify-center mx-auto' >
                <img src={Profile} alt="Profile" className='w-68 h-68 md:w-92 md:h-92 rounded-lg object-cover contrast-125 brightness-110' />
            </div>
            <div className='w-full flex items-center justify-center gap-8 mt-4'>
                <a href="https://github.com/akankshajadhav1" target="_blank" rel="noopener noreferrer" className='text-[#4B2E2B] hover:text-[#24406c] transition-colors font-bold duration-300'>
                    <Github size={28} />
                </a>
                <a href="https://www.instagram.com/akanksha.jadhav.568" target="_blank" rel="noopener noreferrer" className='text-[#4B2E2B] hover:text-[#7736ad] transition-colors font-bold duration-300'>
                    <Instagram size={28} />
                </a>
                <a href="https://www.linkedin.com/in/akanksha-jadhav-4b6681262/" target="_blank" rel="noopener noreferrer" className='text-[#4B2E2B] hover:text-[#4488d0] font-bold transition-colors duration-300'>
                    <Linkedin size={28} />
                </a>
            </div>
            </div>

            {/* right */}
            <div className='w-full space-y-4 md:space-y-6 mt-6'>
                <p className='text-[#4B2E2B] text-sm md:text-base leading-relaxed tracking-wide'>
                I am a akanksha. A MCA post graduate with a passion for web development and a knack for crafting visually stunning and highly functional websites. With a strong foundation in front-end technologies like ReactJS, HTML, CSS, and JavaScript, I specialize in creating responsive and user-friendly interfaces that captivate audiences. My expertise extends to modern frameworks such as React, allowing me to build dynamic and interactive web applications. I am dedicated to staying up-to-date with the latest industry trends and best practices, ensuring that my work not only meets but exceeds client expectations. I am committed to delivering exceptional results that leave a lasting impression.

                </p>
                </div>
          </div>
          </div>
       
          </section>
  )
}

export default About
