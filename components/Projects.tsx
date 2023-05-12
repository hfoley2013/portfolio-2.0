'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44">
            <motion.img 
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/next.svg"
              alt=""
              className=""
            />

            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i+1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maxime atque reprehenderit. Inventore at, commodi quisquam temporibus suscipit laudantium non a? Sapiente rem ipsum, nemo placeat obcaecati reprehenderit dolor laboriosam?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects
