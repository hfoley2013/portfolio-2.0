'use client'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experiences?: Experience[]
}

function Experience({ experiences }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full px-1 mx-auto overflow-hidden text-left sm:px-10 md:flex-row justify-evenly"
    >
      <h3 className="sectionHeader">
        Experience
      </h3>

      <div className="flex w-full pt-10 sm:p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80" suppressHydrationWarning>
        {experiences?.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience