'use client';
import { motion } from 'framer-motion';
import {TypingText,TitleText} from '../components'
import styles from '../styles';
import { staggerContainer,fadeIn} from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative`}>
  <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}} className={`${styles.innerWidth} mx-auto flex  flex-col `}>
    <TypingText title="|People On The World" textStyles="text-center"/>
    <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center"/>
    <motion.div variant={fadeIn('up','tween',0.3,1)} className='relative mt-[68px] flex w-full h0[550px]'>
<img src="/map.png" alt="map" className='w-full h-full object-cover'/>
    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="people-01.png" alt="p1" className="w-full h-full"/>
    
    </div>
    <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
    <img src="people-02.png"alt="p2"className="w-full h-full "/>
    </div>
    <div className="absolute  left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
   

     </div>
    < div className='absolute top-72 left-[18%] w-[100px] h-[100px] p-[2px] rounded-lg bg-[#5d6680]'>
    <img src="planet-09.png"alt="p3"className="w-full h-full z-03"/>

     </div>
     <div className='absolute bottom-72 right-[19%] w-[100px] h-[80px] p-[2px] rounded-lg bg-[#5d6680]'>
    <img src="planet-07.png"alt="p3"className="w-full h-full "/>

     </div>
    </motion.div>
   </motion.div>

   </section>
);

export default World;
