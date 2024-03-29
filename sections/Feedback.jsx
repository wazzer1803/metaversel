'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` w-full`}
    >

    

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-col flex justify-center items-center"
      >
        <img
          src="klopp.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
       <h1 className="text-black font-bold text-[40px]">The Gaffer</h1>
        <h2 className="text-black font-italic text-[34px] mt-1">Jurgen Klopp</h2>

      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;

