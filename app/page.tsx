import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import Calender from "@/components/Calender";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Content from "@/components/Content";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Content />
      <Achievements />
      <Calender />
      <Customers />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
