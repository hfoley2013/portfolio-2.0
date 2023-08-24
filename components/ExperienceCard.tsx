import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  experience?: Experience,
}

function ExperienceCard({ experience }: Props) {
  return (
    // <article className="flex max-h-[350px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] flex-col items-center flex-shrink-0 rounded-lg sm:space-y-2 md:space-y-3 w-full md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-2 sm:p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
    <article className="flex p-2 sm:p-3 md:p-5 md:max-w-4xl flex-col items-center flex-shrink-0 rounded-lg w-full snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img

        initial={{
          y: -50,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={experience ? urlForImage(experience.companyImage.asset).url() : ''}
        alt={experience?.company}
        className="w-20 h-20 rounded-full sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-[125px] xl:h-[125px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-base font-light sm:text-ls md:text-xl lg:text-2xl">{experience?.jobTitle}</h4>
        <p className="mt-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{experience?.company}</p>
        <div className="flex my-1 space-x-2 sm:my-2 justify-evenly">
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlForImage(technology.image.asset).url()}
              height={128}
              width={128}
              alt={technology.title}
              loading='lazy'
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16"
            />
          ))}
        </div>
        <p className="py-1 text-xs text-gray-300 uppercase sm:py-2 2xl:py-5 sm:text-sm md:text-base lg:text-lg">
          {new Date(experience?.dateStarted).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          {" "}—{" "}
          {experience?.isCurrentlyWorkingHere || experience?.dateEnded === undefined ? "Present" : new Date(experience?.dateEnded).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </p>


        <ul className='ml-5 space-y-1 sm:space-y-2 2xl:space-y-3 text-[10px] list-disc sm:text-xs md:text-sm lg:text-base'>

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
