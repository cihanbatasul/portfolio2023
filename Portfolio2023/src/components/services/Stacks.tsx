import { stacks } from "src/static/stacks";
import CardMobile from "./CardMobile";
type Props = {};

const Stacks = (props: Props) => {
  const stackElements = stacks;
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {stackElements.map((stack, index: number) => (
        <CardMobile info={stack} key={index} />
      ))}{" "}
    </div>
  );
};

export default Stacks;
