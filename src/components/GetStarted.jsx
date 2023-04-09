import styles from "../style";
import React from "react";
import { arrowUp } from "../assets";
import { uiuxActive, uiuxs } from "../constants";
const GetStarted = () => {
  const [uiux, setUiux] = React.useState(uiuxActive);
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-[#ffffff2f] border p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className={`${uiux.colorTitle}`}>Watch</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className={`${uiux.colorTitle}`}>Trailer</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
