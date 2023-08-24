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
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlForImage(skill?.image.asset).url()}
        loading='lazy'
        className="object-cover transition duration-300 ease-in-out rounded-lg w-14 h-14 md:w-24 md:h-24 lg:h-32 lg:w-32 filter group-hover:grayscale group-hover:rounded-full"
      />
      <div className="absolute z-0 transition duration-300 ease-in-out rounded-full opacity-0 w-14 h-14 md:h-28 md:w-28 lg:h-32 lg:w-32 group-hover:opacity-80 group-hover:bg-white">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100 sm:text-3xl">{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
