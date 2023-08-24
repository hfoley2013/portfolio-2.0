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
        className="flex-shrink-0 hidden object-cover rounded-full sm:block md:mb-0 md:rounded-lg md:w-60 md:h-72 lg:w-[300px] lg:h-[360px] 2xl:w-[500px] 2xl:h-[600px]"
      />

      <div className="px-0 pt-5 mt-5 space-y-10 sm:mt-2 sm:pt-2 md:pt-0 md:mt-0 md:px-10">
        <h4 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-left md:text-lg lg:text-xl">
          {pageInfo?.backgroundInformation}
        </p>

      </div>
    </motion.div>
  )
}

export default About
