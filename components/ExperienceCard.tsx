import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/RainierRanch.png" 
        alt="Rainier Racing Co."
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Founder & CEO</h4>
        <p className="mt-1 text-2xl font-bold">Rainier Racing Co.</p>
        <div className="flex my-2 space-x-2">
          <Image
            src='/vercel.svg'
            height={128}
            width={128}
            alt="tech"
            className="w-10 h-10 rounded-full"
          />
          <Image
            src='/vercel.svg'
            height={128}
            width={128}
            alt="tech"
            className="w-10 h-10 rounded-full"
          />
          <Image
            src='/vercel.svg'
            height={128}
            width={128}
            alt="tech"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work... - Ended....
        </p>

        <ul className='ml-5 space-y-4 text-lg list-disc'>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum ad soluta debitis error dolorem modi vel repellendus quisquam, et perspiciatis officia suscipit quae adipisci nobis eveniet perferendis tempore ullam!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum ad soluta debitis error dolorem modi vel repellendus quisquam, et perspiciatis officia suscipit quae adipisci nobis eveniet perferendis tempore ullam!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum ad soluta debitis error dolorem modi vel repellendus quisquam, et perspiciatis officia suscipit quae adipisci nobis eveniet perferendis tempore ullam!</li>
        </ul>
        
      </div>

    </article>
  )
}

export default ExperienceCard
