'use client'
import { motion } from 'framer-motion'
import Skill from '../components/Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills?: SkillType[]
}

function Skills({ skills }: Props) {
  const sortedSkills = skills ? skills.sort((a, b) => a.title.localeCompare(b.title)) : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center max-w-[2000px] xl:px-10 min-h-screen justify-center lg:grid-flow-col"
    >
      <div className='flex justify-center'>
        <h3 className="sectionHeader">
          Skills
        </h3>

        <h3 className="hidden lg:block lg:absolute top-32 p-3 uppercase tracking-[3px] text-gray-500 text-[10px] sm:text-xs md:text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div className="relative grid justify-center grid-cols-3 gap-2 mt-5 lg:mt-10 xl:mt-20 lg:grid-cols-4 justify-items-center align-items-center lg:gap-3 max-h-[80vh]">
        {sortedSkills.slice(0, sortedSkills.length / 2).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
          />
        ))}

        {sortedSkills.slice(sortedSkills.length / 2, sortedSkills.length).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft={true}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
