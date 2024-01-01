import React from "react";
import Container from "./Container";
import Image from "next/image";

const Customers = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 place-items-center mt-28 gap-y-10 lg:gap-y-0">
        <div className="">
          <Image
            src={"/bg.png"}
            height={250}
            width={400}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <p className="max-w-prose text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur quae esse aut sunt, reprehenderit voluptatem harum illum
            qui tempora ullam rerum assumenda recusandae culpa molestiae
            perspiciatis, numquam ut nisi omnis id nemo facere ipsum. Et, itaque
            natus quos repudiandae totam eaque cumque deserunt officia
            perspiciatis, libero pariatur necessitatibus non ad! Debitis nisi
            quae alias quo aliquam. Reprehenderit nobis accusantium dolor.
          </p>
          <h1 className="text-green-500 text-3xl">Krishna Bharadwaj</h1>
          <p className="text-muted-foreground ">Web developers association</p>
          <div className="flex mt-4 items-center gap-x-10 justify-start w-full">
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo1.svg"} fill alt="" />
            </div>
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo2.svg"} fill alt="" />
            </div>
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo3.svg"} fill alt="" />
            </div>
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo4.svg"} fill alt="" />
            </div>
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo5.svg"} fill alt="" />
            </div>
            <div className=" w-5 h-5 lg:w-8 lg:h-8 relative">
              <Image src={"/logo6.svg"} fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Customers;
