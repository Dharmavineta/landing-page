import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="py-16 mt-20 grid lg:grid-cols-2 gap-10 lg:gap-0 place-items-center px-5 lg:px-0">
      <div className="text-center lg:text-start">
        <h1 className=" text-2xl">
          Helping a Local{" "}
          <span className="text-green-500 font-semibold">
            Business Reinvent Itself
          </span>
        </h1>
        <p className="text-muted-foreground mt-3">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex gap-x-5 md:gap-x-32 px-2 ">
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-x-3 ">
            <Image
              src={"/logo3.svg"}
              height={20}
              width={20}
              alt=""
              className="text-green-500"
            />
            <div>
              <p className="font-semibold">2,245,341</p>
              <p className="text-sm text-muted-foreground">
                Customers satisfied
              </p>
            </div>
          </div>
          <div className="flex  gap-x-3">
            <Image
              src={"/logo1.svg"}
              height={20}
              width={20}
              alt=""
              className="text-green-500"
            />
            <div>
              <p className="font-semibold">54,121</p>
              <p className="text-sm text-muted-foreground">Clubs</p>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-x-3">
            <Image
              src={"/logo2.svg"}
              height={20}
              width={20}
              alt=""
              className="text-green-500"
            />
            <div>
              <p className="font-semibold">878,121</p>
              <p className="text-sm text-muted-foreground">Event Bookings</p>
            </div>{" "}
          </div>
          <div className="flex  gap-x-3">
            <Image
              src={"/logo4.svg"}
              height={20}
              width={20}
              alt=""
              className="text-green-500"
            />
            <div>
              <p className="font-semibold">1,121,232</p>
              <p className="text-sm text-muted-foreground">Payments</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
