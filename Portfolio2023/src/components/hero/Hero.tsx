import { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="p-16 bg-lightGreen flex  flex-col items-center justify-center "
      ref={ref}
    >
      <h1 className="font-cabinetBold text-white text-[9rem] md:text[12rem]  lg:text-[16rem] w-auto ">
        CIHAN
      </h1>
    </div>
  );
});

export default Hero;
