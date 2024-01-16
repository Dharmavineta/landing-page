"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Home, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import UseScroll from "@/hooks/use-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClick(false);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setClick(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = UseScroll();
  return (
    <Container>
      <div
        className={cn(
          `flex justify-between h-16 border-b items-center transition-all duration-300`
        )}
      >
        <Link className="flex gap-x-1" href={"/"}>
          <Image src={"/Icon.svg"} alt="" width={25} height={25} />
          <span className="font-bold text-lg">NeXcent</span>
        </Link>
        <div className=" gap-x-8 hidden lg:flex">
          <button className="flex flex-shrink-0 border-b-2 border-transparent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Home
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Services
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Features
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute  relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Product
          </button>
        </div>
        <div className=" gap-x-4 flex items-center">
          <button className="py-2 px-5 text-green-500">Login</button>
          <button className="py-2 px-5 bg-green-500 rounded-md text-white">
            Register
          </button>
          <div className="lg:hidden">
            <Menu
              onClick={() => setClick(!click)}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {click && (
        <div
          ref={ref}
          className={`fixed flex flex-col justify-between items-start gap-y-5 rounded-md right-5 w-60 top-20 border bg-white h-64 shadow-sm hover:shadow-md transition-all p-5 ${
            click ? "opacity-100 " : " opacity-0 "
          }`}
        >
          <button className="flex flex-shrink-0 border-b-2 border-transparent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Home
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Services
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Features
          </button>
          <button className="flex flex-shrink-0 border-b-2 border-transparent after:absolute  relative after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-800 after:transition-all after:duration-300 hover:after:w-full ">
            Product
          </button>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
