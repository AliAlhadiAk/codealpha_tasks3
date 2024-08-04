import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1  className='my-20 text-center text-4xl'>
            About <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex flex-wrap justify-center'>
            <div className=' w-full lg:w-1/2'>
              <motion.div 
              whileInView={{opacity:1 , x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:0.5}}
              className='flex justify-center items-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6 '>  As a dedicated and versatile Full Stack Developer, I am passionate about crafting efficient, scalable, and user-centric web applications. My expertise spans a range of technologies, including React, Redux, ASP.NET, MS SQL, PostgreSQL, and Firebase. My journey into web development began with a deep-seated curiosity about technology and how it works, evolving into a dynamic career focused on continuous learning and adaptation to emerging challenges.

I am committed to leveraging my technical skills to build innovative solutions, streamline processes, and enhance user experiences. I excel in collaborative environments, where I contribute to team success by tackling complex problems and delivering high-quality solutions. My approach combines rigorous problem-solving with a keen attention to detail, ensuring that projects meet both functional and aesthetic standards.</p>
              </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default About
