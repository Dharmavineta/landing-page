import React from "react";
import Container from "./Container";
import Image from "next/image";

const Blogs = () => {
  return (
    <Container>
      <div className="text-center mt-28 gap-y-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl">Caring is the NEW marketting</h1>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad in
          unde, dicta sequi illo.
        </p>
      </div>
      <div className="flex flex-col mt-16 lg:flex-row lg:gap-x-10 gap-y-10 lg:gap-y-0 items-center lg:justify-evenly">
        <div className="relative">
          <div className="w-[300px] h-[300px] rounded-md">
            <Image
              src={"/bg1.png"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div
            className="absolute left-1/2 right-1/2 w-[250px] flex flex-col items-center gap-10 py-5
           rounded-lg -translate-x-1/2 bg-slate-200 h-[150px] backdrop-blur-md -bottom-6"
          >
            <p className="text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="text-green-500 text-xl">
              {" "}
              Read More &rarr;
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-[300px] h-[300px] rounded-md">
            <Image
              src={"/bg2.png"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div
            className="absolute left-1/2 right-1/2 w-[250px] flex flex-col items-center gap-10 py-5
           rounded-lg -translate-x-1/2 bg-slate-200 h-[150px] backdrop-blur-md -bottom-6"
          >
            <p className="text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="text-green-500 text-xl">
              {" "}
              Read More &rarr;
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-[300px] h-[300px] rounded-md">
            <Image
              src={"/bg3.png"}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div
            className="absolute left-1/2 right-1/2 w-[250px] flex flex-col items-center gap-10 py-5
           rounded-lg -translate-x-1/2 bg-slate-200 h-[150px] backdrop-blur-md -bottom-6"
          >
            <p className="text-muted-foreground text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="text-green-500 text-xl">
              {" "}
              Read More &rarr;
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
