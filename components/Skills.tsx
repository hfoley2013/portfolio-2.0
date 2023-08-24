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
      className="relative flex flex-col h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionHeader">
        Skills
      </h3>

      <h3 className="absolute top-28 md:top-32 uppercase tracking-[3px] text-gray-500 text-[10px] sm:text-xs md:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="max-h-[320px] md:max-h-none">
        <div className="grid grid-cols-4 gap-4 sm:gap-4 md:gap-5">
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
      </div>
    </motion.div>
  )
}

export default Skills
