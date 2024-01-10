interface Item {
  name: string;
  icon: string;
}
interface Stack {
  title: string;
  items: Item[];
  color: string;
  fontColor: string;
  text: string;
}

type Props = {
  info: Stack;
};

const CardMobile = (props: Props) => {
  return (
    <div
      className={`w-full flex flex-col pt-12  items-center justify-center bg-${props.info.color}  `}
    >
      <p className={`text-4xl font-satoshi pb-6 text-${props.info.fontColor}`}>
        {props.info.title}
      </p>
      <div className="flex flex-wrap gap-3 p-3">
        {props.info.items.map((icon, index) => (
          <img height={`30px`} width={`40px`} src={icon.icon} key={index} />
        ))}
      </div>
      <p className="font-cabinet text-2xl">{props.info.text}</p>
    </div>
  );
};

export default CardMobile;
