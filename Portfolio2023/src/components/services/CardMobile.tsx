import { motion } from "framer-motion";
interface Item {
  name: string;
  icon: string;
}
interface Stack {
  title: string;
  items: Item[];
  color: string;
  colorDynamic: string;
  fontColor: string;
  fontColorDynamic: string;
  text: string;
}

type Props = {
  info: Stack;
};

const CardMobile = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ ease: [0.12, 0, 0.39, 0]}}
      className={`w-full h-[400px] rounded-md flex flex-col px-3 mt-12  items-center justify-center ${props.info.colorDynamic}  `}
    >
      <p className={`text-4xl font-satoshi pb-6 ${props.info.fontColorDynamic}`}>
        {props.info.title}
      </p>
      <div className="flex flex-wrap gap-3 p-3">
        {props.info.items.map((icon, index) => (
          <img height={`30px`} width={`40px`} src={icon.icon} key={index} />
        ))}
      </div>
      <p className={`font-cabinet text-2xl  ${props.info.fontColorDynamic}`}>{props.info.text}</p>
    </motion.div>
  );
};

export default CardMobile;
