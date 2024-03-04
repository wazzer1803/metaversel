'use client';
import{motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';
const InsightCard = ({imgUrl,title,subtitle}) => (
 <motion.div variant={fadeIn('up','tween',0.5,1)} className="flex md:flex-row flex-col gap-4">
<img src={imgUrl} alt="plant" className='md:w-[270px] w-full h-[200px] rounded-[32px] object-cover'/>
 <div className="w-full flex justify-between items-center">
<div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
<h4 className="font-extrabold text-white lg:text-[42px] text-[26px]">{title}</h4>
<p className="mt-[16px] font-normal lg:text-[20px] text-[16px] text-secondary-white">{subtitle}</p>
</div>
<div className="lg:flex hidden items-center justify-center rounded-full border-white border-[1px] bg-transparent w-[100px] h-[100px]">
  <img src="arrow.svg" alt="arrow" className="w-[40px] h-[40px]"/>
</div>
 </div>
 </motion.div>
);

export default InsightCard;
