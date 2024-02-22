import { motion } from "framer-motion";
import React, { SetStateAction } from "react";
type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
};

const MenuButton = (props: Props) => {
  return (
    <div
      onClick={() => props.setIsActive(!props.isActive)}
      className="absolute top-2 right-2 h-[40px] w-[200px] rounded-md cursor-pointer overflow-hidden uppercase  font-satoshiThin text-2xl"
    >
      <motion.div
        animate={{ top: props.isActive ? "-100%" : "0" }}
        transition={{duration: 0.5,  ease: [0.76, 0, 0.24, 1]}}
        className="relative w-full h-full"
      >
        <div className="w-full h-full text-white bg-[#393632]   flex items-center justify-center overflow-hidden">
          <p>Menu</p>
        </div>
        <div className="w-full h-full text-white font-satoshiThin bg-black text-2xl absolute top-full flex items-center justify-center ">
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuButton;
