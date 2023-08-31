'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import useIsMobileDeviceView from '@/hooks/useIsMobileDeviceView'
import MobileProjects from './MobileProjects'
import DesktopProjects from './DesktopProjects'

type Props = {
  projects?: Project[]
}

function Projects({ projects }: Props) {

  const isMobileDevice = useIsMobileDeviceView();

  const goToPreviousProject = () => {
    if (projects) {
      setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    }
  };

  const goToNextProject = () => {
    if (projects) {
      setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects?.[currentProjectIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center w-screen h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="sectionHeader">
        Projects
      </h3>

      <div className={`absolute z-20 flex w-full snap-x snap-mandatory ${isMobileDevice ? 'scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll overflow-y-hidden' : ''}`} suppressHydrationWarning>
        {isMobileDevice && projects ? (
          <MobileProjects
            projects={projects}
          />
        ) :
          (currentProject && (
            <DesktopProjects
              projects={projects}
              currentProject={currentProject}
              currentProjectIndex={currentProjectIndex}
              goToPreviousProject={goToPreviousProject}
              goToNextProject={goToNextProject}
            />
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects