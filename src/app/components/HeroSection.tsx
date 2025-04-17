import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border'; 

const HeroSection = () => {
  return (
<div className='h-auto md:h-40rem w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 px-4'>
<div className='p-4 relative z-10 w-full text-center'>
<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
<h1 className='mt-60  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400'>
  Master the art of Music
</h1>

        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit adipisci odio corporis commodi neque facilis illo. Non, culpa tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit adipisci odio corporis commodi neque facilis illo. Non, culpa tempore?
        </p>
        <div className='mt-8 py-2 px-4 overflow-visible'>
          <Link href={'/courses'} className='mt-4 py-2 px-4 overflow-visible'>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200  dark:border-slate-800 w-full"
      >
        Explore Courses
      </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

