'use client'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typings'
import Link from 'next/link'
import Image from 'next/image'
import useIsMobileDeviceView from '@/hooks/useIsMobileDeviceView'

type Props = {
  socials?: Social[];
}

export default function Header({ socials }: Props) {
  const isMobile = useIsMobileDeviceView();

  return (
    <>
      <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
        <motion.div
          initial={{
            x: -200,
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
          <Link href="https://rainierdigitalsolutions.com" target='_blank'>
            <Image
              src={isMobile ? "/rds-logo.svg" : "/rds-full-logo.svg"}
              alt='Rainier Digital Solutions Logo'
              fill
              className='p-3 sm:p-0 hover:opacity-50'
            />
          </Link>
          {socials?.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor='gray'
              bgColor='transparent'
              className='hover:opacity-50'
              aria-label={social.title}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{
            x: 200,
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
              aria-label='email'
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
