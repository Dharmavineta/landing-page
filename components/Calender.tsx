import React from "react";
import Container from "./Container";
import Image from "next/image";

const Calender = () => {
  return (
    <Container>
      <div className="mt-20 grid lg:grid-cols-2 place-items-center gap-y-10 lg:gap-y-0 px-5 lg:px-0">
        <div>
          <Image
            src={"/13.png"}
            alt=""
            width={250}
            height={200}
            className="lg:w-[400px] w-[300px] "
          />
        </div>
        <div className="flex flex-col gap-y-6 text-center lg:text-left items-center justify-center lg:items-start ">
          <h1>How To Best The Business Tactics?</h1>
          <p className="text-muted-foreground max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis
            ea a? Ratione rerum molestiae, corrupti repudiandae ipsam sint
            consectetur est officia ea sequi, harum eveniet dicta dolore,
            molestias assumenda obcaecati officiis perspiciatis ut quod
            voluptates similique in. Dolore eos ipsum quos voluptate ad.{" "}
          </p>
          <button className="bg-green-500 text-white py-2 px-5 rounded-md w-full md:w-fit">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Calender;
