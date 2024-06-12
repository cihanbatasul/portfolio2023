import { cn } from "src/cn"
type Props = {
    onClick: () => void;
    className?: string;
    text: string;
}

const BaseButton = (props: Props) => {
  return (
    <div className={cn(props.className, "w-full text-center md:w-fit p-3 text-white bg-[#393632] rounded-md cursor-pointer hover:bg-neutral-600")} onClick={props.onClick}>{props.text}</div>
  )
}

export default BaseButton