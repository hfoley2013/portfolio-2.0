import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image'
import { Button } from "@/components/ui/button"
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons"
import { Project } from '@/typings'

type DesktopProjectsProps = {
    projects: Project[];
    currentProject: Project;
    currentProjectIndex: number;
    goToPreviousProject: () => void;
    goToNextProject: () => void;
}

const DesktopProjects: React.FC<DesktopProjectsProps> = ({
    projects,
    currentProject,
    currentProjectIndex,
    goToPreviousProject,
    goToNextProject,
}) => {
    return (
        <>
            <div key={currentProject._id} className="flex flex-col items-center justify-center h-screen p-4 mx-auto space-y-5 screen sm:p-5 snap-center md:p-20 lg:p-44">
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
                            className="min-h-[500px] mx-auto aspect-video"
                            id="ytplayer"
                            typeof="text/html"
                            src={`https://www.youtube.com/embed/${currentProject.demo_id}?playlist=${currentProject.demo_id}&autoplay=1&controls=0&enablejsapi=1&loop=1&playsinline=1&mute=1&showinfo=0&rel=0&iv_load_policy
=3`}
                            allowFullScreen
                            loading='lazy'
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
                            className="md:max-h-[600px]"
                            loading='lazy'
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
                                loading="lazy"
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
    )
}

export default DesktopProjects
