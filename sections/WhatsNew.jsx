'use client';


import { motion } from 'framer-motion';
import {TypingText,NewFeatures,TitleText} from '../components'
import styles from '../styles';
import { newFeatures, startingFeatures } from '../constants';
import { staggerContainer,fadeIn,planetVariants} from '../utils/motion'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative`}>
  <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
<motion.div variants={fadeIn('right','tween','0.2','1')} className="flex-[0.75] flex justify-center flex-col">
<TypingText title="What's New"/>
<TitleText title={<>What's new about the metaverse</>}/>
   <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
{newFeatures.map((feature)=>(<NewFeatures key={feature.title} {...feature}/>))}
   </div>
   </motion.div>
   <motion.div variants={planetVariants('right') } className={`${styles.flexCenter} flex-1`}>
<img src="/wall2.jpg" alt="get-started" className="w-[90%] h-[90%] object-contain rounded-[120px]"/>
   </motion.div>
    </motion.div>
</section>
);

export default WhatsNew;
