import styles from '../styles'

const StartSteps = ({key,number,text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-slate-600`}>
 <p className="font-bold text-[20px] text-black">0{number}</p>
    </div>
   <p className="flex-1 ml-[30px] font-extrabold text-[20px] text-gray-700 leading-[32px]">
    {text}
   </p>
  </div>
);

export default StartSteps;
