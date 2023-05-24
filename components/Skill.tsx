import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img 
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlForImage(skill?.image.asset).url()}
        className="object-cover w-12 h-12 transition duration-300 ease-in-out border border-gray-500 rounded-full sm:w-16 sm:h-16 2xl:w-32 2xl:h-32 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 sm:w-16 sm:h-16 group-hover:opacity-80 group-hover:bg-white 2xl:w-32 2xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100 sm:text-3xl">{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
