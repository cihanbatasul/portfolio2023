import React, { forwardRef } from "react";

type Props = {};

const Hero = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      className="p-16 bg-lightGreen flex  flex-col items-center justify-center "
      ref={ref}
    >
      <h1 className="font-cabinetBold text-white text-[16rem] w-auto ">
        CIHAN
      </h1>
    </div>
  );
});

export default Hero;
