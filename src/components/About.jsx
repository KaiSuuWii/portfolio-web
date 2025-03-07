import React from 'react'
import aboutImg from '../assets/about.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-xl'>
                    I’m a passionate and aspiring <span className='font-bold'>Web Developer</span> and <span className='font-bold'>Web Designer</span> currently pursuing a degree in <span className='font-bold'>Computer Engineering</span>. 
                    With hands-on experience in front-end development and mobile development, I specialize in creating responsive and user-friendly interfaces using technologies like ReactJS, TailwindCSS, VueJS, Flutter and React Native.
                    <br/> My goal is to merge functionality and design seamlessly to deliver impactful digital solutions. I’m continuously learning and exploring new technologies, excited to grow as a developer and designer while contributing to meaningful projects.
                    </p>
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt="Me"/>
        </div>
    </div>
  )
}

export default About