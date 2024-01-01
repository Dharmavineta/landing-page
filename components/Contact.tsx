import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container className="">
      <div className="flex py-28 flex-col gap-y-6 items-center justify-center ">
        <h1 className="text-3xl lg:text-4xl text-center lg:text-start">
          Lorem ipsum dolor sit amet.
        </h1>
        <button className="bg-green-500 px-5 text-white py-2 rounded-md">
          Get a Demo &rarr;
        </button>
      </div>
    </Container>
  );
};

export default Contact;
