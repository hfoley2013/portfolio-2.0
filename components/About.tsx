'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'

type Props = {
  pageInfo?: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl w-full">
        About
      </h3>
      <div className="flex flex-col sm:flex-row md:item-center">
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
          // className="flex-shrink-0 object-cover max-w-full h-56 mb-8 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          className="object-cover h-32 w-32 mb-8 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          // className="flex-shrink-1 object-cover max-w-full h-32 sm:h-56 mb-8 rounded-full sm:mb-0 sm:mr-8 md:mr-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          // className="object-cover w-32 h-32 sm:h-auto mb-8 rounded-full sm:mb-0 sm:mr-8 md:mr-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />

        <div className="flex flex-col space-y-5 md:ml-8">
          <h4 className="text-base font-semibold sm:text-4xl">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-xs text-left sm:text-base">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
