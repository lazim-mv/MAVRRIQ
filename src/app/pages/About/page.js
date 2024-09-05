"use client";
import React, { useEffect, useState } from "react";
import styles from "./aboutpage.module.css";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import img1 from "../../../../public/aboutpage/1.png";
import mImg1 from "../../../../public/aboutpage/m1.png";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/Components/ButtonComponent";
import Container2 from "@/app/Components/Container2/Container2";
import Container5 from "@/app/Components/Container5/Container5";
import { container3 } from "./data";
import Testimonial from "@/app/Components/Testimonial/Testimonial";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";
import Horizontal from "@/app/Components/HorizontalScroll/Horizontal";

const Page = () => {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  if (screenSize !== null) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.firstContainer}>
          <div className={styles.titles}>
            <SectionName sectionText="About Us" />
            <SectionTitle sectionText="Discover the Expertise Behind Mavrriq" />
          </div>

          <div className={styles.imgContainer}>
            <img
              src={screenSize < 768 ? mImg1.src : img1.src}
              alt="ImageHeader"
            />
          </div>
        </div>

        <Container2 page="about" />
        <Horizontal />

        <div className={styles.container3}>
          <div className={`${styles.imgContainer3} ${styles.imgContainer33}`}>
            <img src={container3.img} alt="Asian Engineer" />
          </div>
          <div className={styles.content3}>
            <SectionName sectionText={container3.mission} />
            <SectionTitle sectionText={container3.SectionTitle} />
            <SectionDescription sectionText={container3.desc} />
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.content3}>
            <SectionName sectionText={container3.vission} />
            <SectionTitle sectionText={container3.vissionSectionTitle} />
            <SectionDescription sectionText={container3.vissionDesc} />
          </div>
          <div className={styles.imgContainer3}>
            <img src={container3.vissionImg} alt="Asian Engineer" />
          </div>
        </div>

        <Testimonial />
        <Contact />
        <Footer />
      </>
    );
  }
};

export default Page;
