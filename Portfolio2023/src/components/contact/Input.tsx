import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { email } from "./Form";
type Props = {
  text: string;
  type: string;
  msg?: boolean;
  onChange: Dispatch<SetStateAction<email>>;
};

const Input = (props: Props) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    let formName: string;
    if (name === "email") {
      formName = "senderEmail";
    }

    if (name === "name") {
      formName = "senderName";
    }

    if (name === "message") {
      formName = name;
    }
    props.onChange((prevData) => ({ ...prevData, [formName]: value }));
  };

  if (props.msg) {
    return (
      <div className="relative w-full  ">
        <textarea
          onChange={handleInputChange}
          name={props.text.toLowerCase()}
          id="name"
          className="h-32 block border-b-2 border-b-black px-2.5 pb-2.5 pt-4 w-full text-base font-cabinet appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute text-xl  text-gray-500 font-cabinet duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {props.text}
        </label>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <input
        onChange={handleInputChange}
        name={props.text.toLowerCase()}
        type={props.type}
        id="name"
        className="block border-b-2 border-b-black px-2.5 pb-2.5 pt-4 w-full text-base font-cabinet appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor="name"
        className="absolute text-xl text-gray-500 font-cabinet duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {props.text}
      </label>
    </div>
  );
};

export default Input;
