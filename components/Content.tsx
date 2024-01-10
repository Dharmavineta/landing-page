import React from "react";
import Container from "./Container";
import Image from "next/image";

const Content = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 py-10 place-items-center mt-28 gap-y-20 lg:gap-y-0 px-5 lg:px-0">
        <div className=" ">
          <Image
            src={"/7.png"}
            alt=""
            width={250}
            height={200}
            className="lg:w-[400px] w-[300px] "
          />
        </div>
        <div className="flex text-center lg:text-start gap-y-5 flex-col items-center justify-center lg:items-start lg:justify-start ">
          <h1 className="text-4xl max-w-prose">
            The Unseen of spending three years at Pixelgrade
          </h1>
          <p className="max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quidem
            voluptates accusamus deleniti corporis libero possimus temporibus ut
            esse officiis exercitationem vero sit provident, tempora veniam
            totam blanditiis suscipit! Consequatur!
          </p>
          <button className="bg-green-500 text-white w-full md:w-fit rounded-md py-2 px-5">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Content;
