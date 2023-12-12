type Props = {
  text: string;
};

const SectionHeader = (props: Props) => {
  return (
    <h1 className=" mx-auto text-6xl md:text-8xl lg:text-9xl  leading-tight font-satoshi text-lightGreen ">
      {props.text.toUpperCase()}
    </h1>
  );
};

export default SectionHeader;
