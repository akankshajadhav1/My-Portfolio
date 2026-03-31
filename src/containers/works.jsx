import React from 'react'
import { projects } from '../utils/helper'

const Works = () => {
  return (
    <section id="work" className='w-full min-h-screen bg-gradient-to-br from-[#f3eee2] via-[#f1e9df] to-[#dcd9d7] py-16 md:py-24 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-[#4B2E2B] mb-4 tracking-tight'>
            Recent Work
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#A98B76] to-[#4B2E2B] mx-auto rounded-full'></div>
          <p className='text-[#A98B76] mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
            Explore my latest projects showcasing modern web development techniques and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className='text-center mt-12 md:mt-16'>
          <p className='text-[#4B2E2B] text-lg mb-6'>Want to see more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center gap-3 px-6 py-3 bg-[#4B2E2B] text-white font-semibold rounded-lg hover:bg-[#3a2323] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit My GitHub
          </a>
        </div> */}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className='group w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100 hover:border-[#A98B76]/20 hover:-translate-y-2'>
      {/* Image Container */}
      <div className='relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#F5E6D3] to-[#FFF6E5]'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>

      {/* Content */}
      <div className='p-5 md:p-6'>
        <h3 className='text-lg md:text-xl font-bold text-[#4B2E2B] mb-3 group-hover:text-[#A98B76] transition-colors duration-300'>
          {project.title}
        </h3>

        <p className='text-sm md:text-base text-[#A98B76] leading-relaxed mb-4 line-clamp-3'>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-gradient-to-r from-[#F5E6D3] to-[#FFF6E5] text-[#A98B76] text-xs font-medium rounded-full border border-[#A98B76]/20 hover:shadow-md transition-shadow duration-200'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#4B2E2B] to-[#3a2323] text-white text-sm font-semibold rounded-lg hover:from-[#3a2323] hover:to-[#2a1a1a] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg'
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Repository
        </a>
      </div>
    </div>
  )
}

export default Works
