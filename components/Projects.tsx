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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div key={project._id} className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 space-y-5 sm:p-20 snap-center md:p-44">

            <div className="max-w-6xl px-0 space-y-5 sm:space-y-10 md:px-10">
              <h4 className="font-semibold text-center text-md sm:text-3xl md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects?.length}:
                </span>
                <br></br>
                <p className="mt-1 sm:mt-5 sm:pt-4">{project?.title}</p>
              </h4>

              <div className='flex items-center justify-center'>
                <Link href={project.linkToBuild} target="_blank">
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
                    className="w-auto h-32 max-w-[100%] sm:h-48 sm:max-w-none md:h-64 lg:h-96"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                {project?.technologies.map((technology) => (
                  <Image
                    key={i}
                    src={urlForImage(technology.image.asset).url()}
                    alt={technology.title}
                    width={0}
                    height={0}
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                ))}
              </div>

              <p className="text-xs text-center sm:text-lg md:text-left">
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
