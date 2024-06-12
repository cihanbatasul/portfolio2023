import { Code } from "lucide-react";


const Logo = () => {
  return (
    <a 
      href="/" 
      className="bg-[#393632] text-white font-cabinet text-xl rounded-md px-3 py-1 flex items-center justify-center cursor-pointer gap-1"
    >
      <Code />
      <span>Cihan Webdev</span>
    </a>
  );
};

export default Logo;