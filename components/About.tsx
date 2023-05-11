'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src="/headshot.jpg"
        className="flex-shrink-0 object-cover w-56 h-56 mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum distinctio voluptas doloremque provident magni, quod, placeat officia quaerat vitae maiores ex? Excepturi repudiandae similique amet velit deleniti, repellendus facere praesentium.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum ea distinctio hic! Optio, id? Voluptas quis alias eligendi quasi dolore aspernatur similique. Voluptate officiis cum, eligendi eius explicabo id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum magnam nemo corrupti sit quod quas aliquam reprehenderit eum perferendis amet tenetur! Possimus labore inventore beatae, eligendi minus ullam nam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam similique vel, eum placeat, excepturi cumque eos sit ipsam accusamus quidem odit, ex tenetur voluptates nulla alias tempora deserunt? Totam, accusantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos veniam sapiente eum minima, asperiores dolor sequi consequatur unde, omnis suscipit explicabo illum quibusdam consectetur cum? Officiis iste sapiente delectus?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sapiente optio tenetur aut culpa asperiores eveniet accusamus eum itaque ipsam deleniti, aliquam dolores fugiat quis. Animi, aperiam fugit. Molestias, sit.
        </p>
      </div>
    </motion.div>
  )
}

export default About
