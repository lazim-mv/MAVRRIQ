"use client";
import { useEffect, useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Container2 from "./Components/Container2/Container2";
import Container3 from "./Components/Container3/Container3";
import Container4 from "./Components/Container4/Container4";
import Container5 from "./Components/Container5/Container5";
import Container6 from "./Components/Container6/Container6";
import Container8 from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import Testimonial from "./Components/Testimonial/Testimonial";
import UnderMaintainance from "./Components/undermaintainance/UnderMaintainance";
import { container3 } from "./Contents/content";

export default function Home() {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  if (screenSize !== null) {
    return (
      <main>
        <Header />
        <MobileHeader />
        <Hero />
        <Container2 />
        <Container3 content={container3} page="Home" />
        <Container4 />
        <Container5 />
        <Container6 />
        <Testimonial />
        <Blogs />
        <Container8 />
        <Contact />
        <Footer />
        {/* <UnderMaintainance /> */}
      </main>
    );
  }
}
