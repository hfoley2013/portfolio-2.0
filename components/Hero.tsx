'use client';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  pageInfo?: PageInfo
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name}.`,
      "Full Stack Dev",
      "Rainier Digital Solutions",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden text-center">
      <BackgroundCircles />
      <div className='z-[2]'>
        <Image
          src={pageInfo ? urlForImage(pageInfo.heroImage.asset).url() : ''}
          alt={`Profile Image of ${pageInfo?.name}`}
          width={300}
          height={300}
          className="relative z-20 object-cover mx-auto rounded-full w-44 h-44 sm:w-48 sm:h-48 lg:h-52 lg:w-52 xl:w-60 xl:h-60"
          priority
        />
        <div className="z-20 mt-2 sm:mt-5">
          <h1 className="text-xs tracking-[10px] sm:text-sm md:text-lg uppercase text-gray-500 pb-2 sm:tracking-[15px]">{pageInfo?.role}</h1>
          <h2 className="px-10 text-xl font-semibold sm:text-2xl lg:text-4xl">
            <span className="mr-2">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h2>

          <div className="grid w-screen grid-cols-2 mt-2 sm:block sm:mt-5">
            <a href="/#about" className="heroButton">About</a>
            <a href="/#experience" className="heroButton">Experience</a>
            <a href="/#skills" className="heroButton">Skills</a>
            <a href="/#projects" className="heroButton">Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
