import { useState } from "react";
import "./index.css";

import contactFormModel from "../../models/ContactForm.model";
import Heading from "../../components/heading";
import Text from "../../components/text";
import Form from "../../components/form";
import Button from "../../components/button";


const Contact = () => {
  const [formState, setFormState] = useState({});

  const InputChangeHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormState((prevState) => ({ ...prevState, [field]: value }));
    console.log(formState)
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Submitting... ", formState)
    //validation
    //sending data
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>

        <div className="contact-form-wrapper">
          <Form inputRows={contactFormModel} inputHandler={InputChangeHandler} formState={formState} />
          <Button use="button" href="#" color="primary" type="submit" onClick={submitHandler}>
            Submit Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
