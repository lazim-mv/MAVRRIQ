"use client";
import React, { useEffect, useState } from "react";
import styles from "./saudi.module.css";
import { SectionName, SectionTitle } from "@/app/Components/ButtonComponent";
import { container10, container2, container3, container5, container9, firstContainer } from "./data";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import Container2 from "@/app/Components/Container2/Container2";
import Container3 from "@/app/Components/Container3/Container3";
import Container4 from "@/app/Components/Container4/Container4";
import Container5 from "@/app/Components/Container5/Container5";
import Container6 from "@/app/Components/Container6/Container6";
import Testimonial from "@/app/Components/Testimonial/Testimonial";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";
import Container9 from "@/app/Components/Container9/Container9";
import Container10 from "@/app/Components/Container10/Container10";
import CardContainer from "@/app/Components/pagesComponents/CardContainer";

const Page = () => {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  if (screenSize === null) return;
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.firstContainer}>
        <SectionTitle sectionText={firstContainer.sectionTitle} />
        <div className={styles.imgContainer}>
          <img
            src={screenSize < 768 ? firstContainer.mImg : firstContainer.img}
            alt="Asian Engineer"
            className={styles.heroImage}
          />
        </div>
      </div>
      <Container2 content={container2} />
      <CardContainer content={container3} page={true} mHeight="518vw" />
      <Container9 content={container9} />
      <Container4 />
      <Container5 content={container5} />
      <Container6 />
      <Container10 content={container10} />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
