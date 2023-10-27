import styles from "../style";
import { arrowup } from "../assets";

const GetRegister = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer left-7 sm:mt-100 mt-30`}>
    <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowup} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Registered</span>
      </p>
    </div>
  </div>
);

export default GetRegister;
