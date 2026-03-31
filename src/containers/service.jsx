import { Zap } from 'lucide-react'
import { Card } from '../components/ui/card'
import React from 'react'

const Service = () => {
  return (
    <section id='services' className='w-full container mx-auto px-4 sm:px-6 relative pt-16 md:pt-32 pb-16 md:pb-32 flex flex-col items-center justify-start'>
      <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-serif italic text-[#4B2E2B] mb-6 md:mb-4 tracking-tight'>
        HELLO!
      </h2>

      {/* Mobile/Tablet: stacked layout; Desktop: 5-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] lg:grid-cols-5 gap-6 items-center">

        {/* Left pills */}
        <div className="w-full flex flex-row md:flex-col items-center justify-center gap-3 md:gap-6 lg:col-span-1">
          {/* first one */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-0 md:rotate-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs whitespace-nowrap">Frontend Development</p>
          </div>
          {/* second One */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-sky-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs whitespace-nowrap">Full Stack Development</p>
          </div>
        </div>

        {/* Center text */}
        <div className="flex items-center justify-center w-full lg:col-span-3">
          <p className="text-center text-neutral-800 font-normal font-serif tracking-wider sm:tracking-widest text-lg sm:text-xl md:text-3xl lg:text-4xl w-full leading-snug sm:leading-normal">
            focus is on blending clear strategy, thoughtful design, and user
            empathy to{" "}
            <span className="text-neutral-300">
              craft experiences that solve real problems
            </span>
          </p>
        </div>

        {/* Right pills */}
        <div className="w-full flex flex-row md:flex-col items-center justify-center gap-3 md:gap-6 lg:col-span-1">
          {/* first one */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-0 md:-rotate-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs whitespace-nowrap">API Integration</p>
          </div>
          {/* second One */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs whitespace-nowrap">Responsive Design</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Service
