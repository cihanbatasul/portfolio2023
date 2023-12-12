import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
import Form from "./Form";
import ContactDetails from "./ContactDetails";
type Props = {};

const Contact = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="h-screen antialiased p-48  flex flex-col  " ref={ref}>
      <SectionHeader text="contact" />
      <div className="w-full flex mt-16">
        <Form />
        <ContactDetails />
      </div>
    </div>
  );
});

export default Contact;
