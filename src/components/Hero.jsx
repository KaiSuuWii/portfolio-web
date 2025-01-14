import React from 'react';
import heroimage from '../assets/profilepic7.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img src={heroimage} alt="hero" />
      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Software Dev", 1000,
              "Web Designer", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          My name is Kaiveni Tom Dagcuta and I am a Computer Engineering Student
        </p>
        <div className='my-8'>
          <a 
            href='https://drive.google.com/file/d/1g1BxRDf3nSTrJ7y6gRtk8QsPyT6hAo29/view?usp=sharing'
            target='_blank' 
            rel='noopener noreferrer' 
            className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-[#5de0e6] to-[#004aad] border-none text-white font-medium'
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
