"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Container from "./Container";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <div className="grid mt-32 lg:mt-44 lg:grid-cols-2 place-items-center gap-y-20 lg:gap-y-0 ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "backInOut",
            duration: 1,
          }}
          className="text-center lg:text-left order-2 lg:order-1 "
        >
          <h1 className="text-5xl lg:text-6xl">Lessons and Insights</h1>
          <h1 className="mt-2 text-5xl lg:text-6xl max-w-prose text-green-500 font-semibold">
            From 8 Years
          </h1>
          <p className="mt-3 text-muted-foreground">
            Where to grow your business as a photographer? Site or Social Media?
          </p>
          <button className="py-2 mt-10 lg:mt-4 w-full rounded-md lg:w-fit px-5 bg-green-500 text-white">
            Register
          </button>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "backInOut",
            duration: 1,
          }}
          className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] order-1 lg:order-2 "
        >
          <Image src={"/hero.png"} alt="" width={400} height={400} />
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;
