import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
    
      <motion.img 
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ 
          x: 0,
          opacity: 1,
         }}
        viewport={{ once: true }}
        src="/headshot.jpg"
        className="flex-shrink-0 object-cover w-56 h-56 mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
    </div>
  )
}

export default About
