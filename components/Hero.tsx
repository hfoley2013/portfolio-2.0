'use client';
import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Harper Foley.",
      "Bombs => Banking => Backend",
      "Full Stack Dev",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/headshot.jpg"
        alt="Profile Image of Harper Foley"
        width={256}
        height={256}
        className="relative rounded-full h-32 w-32 max-w-xs max-h-xs mx-auto object-cover"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Full Stack Developer</h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#" className="heroButton">About</Link>
          <Link href="#" className="heroButton">Experience</Link>
          <Link href="#" className="heroButton">Skills</Link>
          <Link href="#" className="heroButton">Projects</Link>
          <Link href="#" className="heroButton">Resume</Link>
        </div>
      </div>
    </div>
  );
}
