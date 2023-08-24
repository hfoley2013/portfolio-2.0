import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  experience?: Experience,
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-1 sm:space-y-2 md:space-y-7 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-2 sm:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-20 h-20 rounded-full sm:w-32 sm:h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-base font-light sm:text-xl md:text-3xl lg:text-4xl">{experience?.jobTitle}</h4>
        <p className="mt-1 text-sm font-bold sm:text-base md:text-2xl lg:text-3xl">{experience?.company}</p>
        <div className="flex my-1 space-x-2 sm:my-2 justify-evenly">
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlForImage(technology.image.asset).url()}
              height={128}
              width={128}
              alt={technology.title}

              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          ))}
        </div>
        <p className="py-1 text-xs text-gray-300 uppercase sm:py-2 md:py-5 sm:text-sm md:text-base lg:text-lg">

          {new Date(experience?.dateStarted).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          {" "}—{" "}
          {experience?.isCurrentlyWorkingHere || experience?.dateEnded === undefined ? "Present" : new Date(experience?.dateEnded).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </p>


        <ul className='w-4/5 pr-5 ml-5 space-y-1 sm:space-y-2 md:space-y-4 text-[10px] list-disc sm:text-xs md:text-base lg:text-lg h-48 sm:h-52 md:h-64 lg:h-96'>

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
