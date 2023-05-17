'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
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
          <SocialIcon 
            url="https://twitter.com/RainierRacingCo"
            fgColor='gray'
            bgColor='transparent'  
          />
          <SocialIcon 
            url="https://www.youtube.com/channel/UCmhcoR5U_9u_OBZj-CmMQqw"
            fgColor='gray'
            bgColor='transparent'  
          />
          <SocialIcon 
            url="https://linkedin.com/in/harper-e-foley"
            fgColor='gray'
            bgColor='transparent'  
          />
          <SocialIcon 
            url="https://www.github.com/hfoley2013"
            fgColor='gray'
            bgColor='transparent'  
          />
        </motion.div>

          <Link href="/#contact" scroll={false}>
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
              <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'  
              />
              <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">Get In Touch</p>
            </motion.div>
          </Link>
      </header>
    </>
  )
}
