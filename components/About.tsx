'use client'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlForImage } from '@/sanity/lib/image'

type Props = {
  pageInfo?: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="sectionHeader">
        About
      </h3>

      <div className='flex flex-col items-center justify-center mt-10 sm:flex-row'>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src={pageInfo ? urlForImage(pageInfo.heroImage.asset).url() : ''}
          loading='lazy'
          className="flex-shrink-0 object-cover rounded-full w-36 p-2 md:rounded-lg md:w-60 md:h-72 lg:w-[300px] lg:h-[360px] 2xl:w-[500px] 2xl:h-[600px]"
        />

        <div className="px-1 space-y-1 text-center sm:px-2 md:px-5 sm:text-left sm:space-y-2 lg:space-y-4">
          <h4 className="text-xl font-semibold md:text-2xl lg:text-4xl">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-[12px] text-left md:text-base lg:text-lg xl:text-xl">
            {pageInfo?.backgroundInformation}
          </p>

        </div>
      </div>
    </motion.div>
  )
}

export default About
