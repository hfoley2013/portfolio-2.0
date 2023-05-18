'use client';
import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo.name}.`,
      "Bombs => Banking => Backend",
      "Full Stack Dev",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src={urlForImage(pageInfo.heroImage.asset).url()}
        alt={`Profile Image of ${pageInfo.name}`}
        width={256}
        height={256}
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        priority
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="/#about" scroll={false} className="heroButton">About</Link>
          <Link href="/#experience" scroll={false} className="heroButton">Experience</Link>
          <Link href="/#skills" scroll={false} className="heroButton">Skills</Link>
          <Link href="/#projects" scroll={false} className="heroButton">Projects</Link>
          {/* <Link href="#resume" scroll={false} className="heroButton">Resume</Link> */}
        </div>
      </div>
    </div>
  );
}
