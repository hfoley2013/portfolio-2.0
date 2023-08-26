'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlForImage } from '@/sanity/lib/image'
import { Button } from "@/components/ui/button"
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons"
import useIsMobileDeviceView from '@/hooks/useIsMobileDeviceView'
import { useLazyLoad } from '@/hooks/useLazyLoad'

type Props = {
  projects?: Project[]
}

function Projects({ projects }: Props) {

  const isMobileDevice = useIsMobileDeviceView();

  useLazyLoad(".lazy");

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
          projects.map((project, i) => (
            <div key={project._id} className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 mt-8 space-y-5 sm:mt-5 sm:p-5 snap-center md:p-20 xl:p-44">
              {project.demo_id
                ?
                (
                  <div id="video-container">
                    <motion.iframe
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="aspect-video"
                      id="ytplayer"
                      typeof="text/html"
                      src={`https://www.youtube.com/embed/${project.demo_id}?playlist=${project.demo_id}&autoplay=1&controls=0&enablejsapi=1&loop=1&playsinline=1&mute=1&showinfo=0&rel=0&iv_load_policy=3`}
                    />
                  </div>
                )
                :
                (<motion.img
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlForImage(project.image.asset).url()}
                  alt={project.title}
                  className="md:max-h-[600px] lazy"
                />)}

              <div className="max-w-6xl px-0 space-y-2 md:space-y-6 xl:space-y-6 xl:px-10">
                <h4 className="text-lg font-semibold text-center sm:text-xl md:text-2xl xl:text-4xl">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>

                <div className="flex items-center justify-center space-x-2">
                  {project.technologies.map((technology, i) => (
                    <Image
                      key={`${i}-${technology}`}
                      src={urlForImage(technology.image.asset).url()}
                      alt={technology.title}
                      width={250}
                      height={250}
                      loading='lazy'
                      className="w-10 h-10 sm:w-12 sm:h-12 xl:w-20 xl:h-20"
                    />
                  ))}
                </div>

                <p className="text-sm text-left sm:text-base md:text-lg">
                  {project.summary}
                </p>
              </div>
            </div>
          ))) :
          (currentProject && (
            <>
              <div key={currentProject._id} className="flex flex-col items-c?auto=1&muted=1&controls=0-screen h-screen p-4 space-y-5 sm:p-5 snap-center md:p-20 lg:p-44">
                <div
                  id="video-container"
                >
                  {currentProject.demo_id
                    ?
                    (<motion.iframe
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="min-h-[300px] mx-auto  aspect-video"
                      id="ytplayer"
                      typeof="text/html"
                      src={`https://www.youtube.com/embed/${currentProject.demo_id}?playlist=${currentProject.demo_id}&autoplay=1&controls=0&enablejsapi=1&loop=1&playsinline=1&mute=1&showinfo=0&rel=0&iv_load_policy
=3`}
                      allowFullScreen
                    />
                    )
                    :
                    (<motion.img
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      src={urlForImage(currentProject.image.asset).url()}
                      alt={currentProject.title}
                      className="md:max-h-[600px] lazy"
                    />)}
                </div>

                <div className="max-w-6xl px-0 space-y-2 sm:space-y-4 md:space-y-6 xl:space-y-10 md:px-10">
                  <h4 className="text-lg font-semibold text-center sm:text-xl md:text-2xl lg:text-3xl">
                    <span className="underline decoration-[#F7AB0A]/50">
                      Case Study {currentProjectIndex + 1} of {projects.length}:
                    </span>{" "}
                    {currentProject.title}
                  </h4>

                  <div className="flex items-center justify-center space-x-2">
                    {currentProject.technologies.map((technology, i) => (
                      <Image
                        key={`${technology}-${i}`}
                        src={urlForImage(technology.image.asset).url()}
                        alt={technology.title}
                        width={250}
                        height={250}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-left sm:text-base xl:text-lg">
                    {currentProject.summary}
                  </p>
                </div>
              </div>
              <Button
                variant='outline'
                aria-label="Previous Project"
                onClick={goToPreviousProject}
                className="absolute left-8 top-[50%] transform -translate-y-1/2 z-30 p-4 text-white bg-black bg-opacity-50 border border-[#F7AB0A]/80"
              >
                <DoubleArrowLeftIcon className='w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                aria-label="Next Project"
                onClick={goToNextProject}
                className="absolute right-8 top-[50%] transform -translate-y-1/2 z-30 p-4 text-white bg-black bg-opacity-50 border border-[#F7AB0A]/80"
              >
                <DoubleArrowRightIcon className='w-5 h-5' />
              </Button>
            </>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects