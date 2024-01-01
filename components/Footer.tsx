import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Search, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-gray-900 min-h-[10rem]">
      <Container>
        <div className="grid grid-cols-12 p-10 gap-y-10 lg:gap-y-0">
          <div className="flex flex-col text-white gap-y-7 col-span-12 lg:col-span-4">
            <Link className="flex gap-x-1" href={"/"}>
              <Image src={"/Icon.svg"} alt="" width={25} height={25} />
              <span className="font-bold text-lg  text-white">NeXcent</span>
            </Link>
            <p>Copyright &copy; Nexcent ltd</p>
            <p>All rights reserved</p>
            <div className="flex gap-x-4">
              <div className="flex gap-x-4">
                <div className="bg-slate-800 rounded-xl p-3">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="bg-slate-800 rounded-xl p-3">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="bg-slate-800 rounded-xl p-3">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="bg-slate-800 rounded-xl p-3">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 text-white grid lg:grid-cols-3 gap-y-16 lg:gap-y-0">
            <div className="flex flex-col text-white items-start gap-y-6">
              <h1 className="text-3xl">Company</h1>
              <p className="">About Us</p>
              <p className="">Blog</p>
              <p className="">Contact us</p>
              <p className="">Pricing</p>
              <p className="">Testimonials</p>
              <p className="">FAQ</p>
            </div>
            <div className="flex flex-col text-white items-start gap-y-6">
              <h1 className="text-3xl">Support</h1>
              <p className="">Help Center</p>
              <p className="">Terms and services</p>
              <p className="">Legal</p>
              <p className="">Privacy Policy</p>
              <p className="">Status</p>
              <p className="">Demo</p>
            </div>
            <div className="flex flex-col text-white items-start relative gap-y-6">
              <h1 className="text-3xl">Stay Connected with us</h1>
              <div className="relative">
                <input
                  className=" lg:w-full w-fit placeholder:px-10 p-2 rounded-md"
                  placeholder="Your email Address"
                />
                <Search className="absolute left-4 top-[30%] text-black h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-white text-center bg-slate-700 py-2 ">
        Done by Krishna Bharadwaj
      </div>
    </div>
  );
};

export default Footer;
