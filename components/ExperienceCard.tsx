import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  experience?: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-screen max-h-screen sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] pl-4 sm:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-[#F7AB0A]/80">
      <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={experience? urlForImage(experience.companyImage.asset).url() : ''} 
        alt={experience?.company}
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="font-light text-md sm:text-2xl md:text-4xl">{experience?.jobTitle}</h4>
        <p className="mt-1 text-sm font-bold sm:text-xl md:text-2xl">{experience?.company}</p>
        <div className="flex justify-center my-2 space-x-2">
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlForImage(technology.image.asset).url()}
              height={128}
              width={128}
              alt={technology.title}
              className="w-10 h-10 rounded-full md:w-16 md:h-16"
            />
          ))}
        </div>
        <p className="py-5 text-gray-300 uppercase text-md sm:text-lg">
          {new Date(experience?.dateStarted).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          {" "}—{" "}
          {experience?.isCurrentlyWorkingHere || experience?.dateEnded === undefined ? "Present" : new Date(experience?.dateEnded).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <ul className='ml-5 space-y-4 overflow-y-scroll text-xs md:text-lg list-disc h-36 sm:h-48 md:h-96 w-11/12 pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience?.points.map((point, i) => (
            <li key={i}>
              {point}
            </li>
          ))}
        </ul>
        
      </div>
    </article>
  )
}

export default ExperienceCard
