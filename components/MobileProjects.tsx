import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlForImage } from '@/sanity/lib/image';
import useIsMobileDeviceView from '@/hooks/useIsMobileDeviceView';

type MobileProjectsProps = {
    projects: Project[];
};

function MobileProjects({
    projects,
}: MobileProjectsProps) {
    const isMobileDevice = useIsMobileDeviceView();

    return (
        <>
            {projects.map((project, i) => (
                <div
                    key={project._id}
                    className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-4 mx-auto mt-8 space-y-5 sm:mt-5 sm:p-5 snap-center md:p-20 xl:p-44"
                >
                    {project.demo_id ? (
                        <div id="video-container">
                            <motion.iframe
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="min-h-[200px] md:min-h-[300px] aspect-video"
                                id="ytplayer"
                                typeof="text/html"
                                src={`https://www.youtube.com/embed/${project.demo_id}?playlist=${project.demo_id}&autoplay=1&controls=0&enablejsapi=1&loop=1&playsinline=1&mute=1&showinfo=0&rel=0&iv_load_policy=3`}
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <motion.img
                            initial={{
                                y: -100,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlForImage(project.image.asset).url()}
                            alt={project.title}
                            className="md:max-h-[600px]"
                            loading="lazy"
                        />
                    )}
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

                        <p className="text-sm text-left sm:text-base md:text-lg">
                            {project.summary}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MobileProjects;
