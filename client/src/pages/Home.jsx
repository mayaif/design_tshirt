import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'


function Home() {
  const snap = useSnapshot(state) //no need to setup react Context
  
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header className='flex grid-cols-2 gap-5 items-center justify-evenly ' {...slideAnimation('down')}>
            <img 
              src='./threejs.png' 
              alt='logo'
              className='w-8 h-8 object-contain'
            />
            <p style={{color: snap.color, fontSize: '2rem'}}
              className='head-text'
              >
                DALL<span>•</span>E
              </p>
          </motion.header>
          <motion.div className='home-content' {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
            
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
              Personalize your shirt like never before with our revolutionary new 3D customization tool - <strong>the ultimate expression</strong>{" "}
                of your unparalleled style.
              </p>
              <CustomButton 
                type='filled'
                title='Customize'
                handleClick={() => state.intro = false}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
            {/* <motion.div {...headTextAnimation}>
              <p>Create with</p>
              <h1 style={{color: snap.color, fontSize: '3rem'}}
              className='head-text xl:ml-20'
              >
                DALL.E
                
              </h1>
              <p>and Unlok the Potential of Creative AI</p>
            </motion.div> */}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home

//<motion.section> is a regular div but it has some animations attached to it