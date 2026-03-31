import { Zap } from 'lucide-react'
import { Card } from '../components/ui/card'
import React from 'react'

const Service = () => {
  return (
    <section id='services' className='w-full container mx-auto px-6 relative pt-24 md:pt-32 pb-24 md:pb-32 flex flex-col items-center justify-start'>
         <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold font-serif italic text-[#4B2E2B] mb-4 tracking-tight'>
            HELLO!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
          {/* first one */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">Frontend Development</p>
          </div>
          {/* second One */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-sky-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">Full Stack Development</p>
          </div>
          {/* third one */}
          {/* <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-black">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">User Experience</p>
          </div> */}
        </div>

        <div className="flex items-center justify-center w-full col-span-3">
          <p className="text-center text-neutral-800 font-normal font-serif tracking-widest text-2xl md:text-4xl w-full">
            focus is on blending clear strategy, thoughtful design, and user
            empathy to{" "}
            <span className="text-neutral-300">
              craft experiences that solve real problems
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 col-span-1">
          {/* first one */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 -rotate-6">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">API Integration
</p>
          </div>
          {/* second One */}
          <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">Responsive Design</p>
          </div>
          {/* third one */}
          {/* <div className="flex items-center justify-start gap-2 rounded-full bg-neutral-100 px-2.5 py-1.5 rotate-6 ">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-500">
              <Zap size={18} className="fill-white text-white" />
            </div>
            <p className="text-xs">API Integration</p>
          </div> */}
        </div>
      </div>

      
    </section>
  )
}

export default Service
