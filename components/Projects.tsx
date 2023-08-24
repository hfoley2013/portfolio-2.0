'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  projects?: Project[]
}

function Projects({ projects }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >

      <h3 className="sectionHeader">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:max-h-[70%] md:overflow-y-scroll">
        {projects?.map((project, i) => (

          <div key={project._id} className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 space-y-5 sm:p-5 snap-center md:p-20 lg:p-44">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlForImage(project?.image.asset).url()}
              alt={project.title}
              className="max-h-[600px]"
            />

            <div className="max-w-6xl px-0 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 md:px-10">
              <h4 className="text-lg font-semibold text-center sm:text-xl md:text-2xl lg:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology, i) => (
                  <Image
                    key={`${i}-${technology}`}
                    src={urlForImage(technology.image.asset).url()}
                    alt={technology.title}
                    width={250}
                    height={250}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  />
                ))}
              </div>
              
              <p className="text-sm text-left sm:text-base md:text-lg">
                {project?.summary}
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
