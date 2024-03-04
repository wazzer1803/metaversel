import styles from "../styles";
const NewFeatures = ({imgUrl,title,subtitle}) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
<div className={`${styles.flexCenter}  w-[70px] h-[70px] rounded-[24px] bg-slate-500`} >
 <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain"/></div>
 <div>
<h1  className="mt-[26px] font-bold text-black text-[24px] leading-[30px]">{title}</h1>
<p className="flex-1 font-normal text-[18px] text-gray-700 leading-[32px] mt-[16px] ">{subtitle}</p>
</div>
  </div>
);

export default NewFeatures;
