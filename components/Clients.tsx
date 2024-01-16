"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 1.5,
        }}
        viewport={{ once: true, amount: 1 }}
        className="flex flex-col mt-40 items-center justify-center gap-y-4 shadow-sm  transition-all duration-200  p-4 "
      >
        <h1 className="font-medium text-3xl text">Our Clients</h1>
        <p className="text-muted-foreground text-sm max-w-prose text-center">
          We are proud to have been working with some of the fortune 500!
        </p>

        <div className="flex mt-4 items-center justify-evenly w-full">
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
      </motion.div>
      <div className="mt-20 flex flex-col text-center">
        <h1 className=" max-w-prose text-4xl">
          Manage your entire community in a single system
        </h1>
        <p className="mt-4 text-muted-foreground">
          Who is NextCent suitable for?
        </p>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-y-20 lg:gap-y-0 lg:gap-x-10 lg:justify-between w-full">
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <div className="bg-lime-200 rounded-full p-4">
                <Image src={"/logo1.svg"} alt="" height={20} width={20} />
              </div>
              <h1 className="text-3xl">MemberShip Organisations</h1>
              <p className="max-w-prose text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                vel repellat dolorem aspernatur ratione laudantium nostrum
                placeat dolor perferendis. Eos, expedita excepturi?
              </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <div className="bg-lime-200 rounded-full p-4">
                <Image src={"/logo2.svg"} alt="" height={20} width={20} />
              </div>
              <h1 className="text-3xl">Clubs and Groups</h1>
              <p className="max-w-prose text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                vel repellat dolorem aspernatur ratione laudantium nostrum
                placeat dolor perferendis. Eos, expedita excepturi?
              </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <div className="bg-lime-200 rounded-full p-4">
                <Image src={"/logo3.svg"} alt="" height={20} width={20} />
              </div>
              <h1 className="text-3xl">National Associations</h1>
              <p className="max-w-prose text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                vel repellat dolorem aspernatur ratione laudantium nostrum
                placeat dolor perferendis. Eos, expedita excepturi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Clients;
