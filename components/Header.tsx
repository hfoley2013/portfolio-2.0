'use client'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'

type Props = {
  socials?: Social[];
}

export default function Header({ socials }: Props) {

  return (
    <>
      <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="flex flex-row items-center">
          {socials?.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor='gray'
              bgColor='transparent'
              className='hover:opacity-50'
            />
          ))}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 2
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <div className='hover:opacity-50'>
            <SocialIcon
              className='cursor-pointer'
              network='email'
              fgColor='gray'
              bgColor='transparent'
              url='/#contact'
            />
            <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">Get In Touch</p>
          </div>
        </motion.div>
      </header>
    </>
  )
}
