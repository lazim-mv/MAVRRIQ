"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./careers.module.css";
import { SectionName, SectionTitle } from "@/app/Components/ButtonComponent";
import { container2, container3, firstContainer } from "./data";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import gsap from "gsap";
import { Linear } from "gsap/gsap-core";
import Container2 from "@/app/Components/Container2/Container2";
import Container3 from "@/app/Components/Container3/Container3";
import Container7 from "@/app/Components/Container7/Container7";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";

const Page = () => {
  const containerRef = useRef(null);

  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  useEffect(() => {
    if (screenSize !== null && screenSize !== undefined) {
      const movingImages = containerRef.current;
      const rate = 100;
      const distance = movingImages.scrollWidth / 2;
      const time = distance / rate;

      const animation = gsap.to(movingImages, {
        x: `-${distance}px`,
        duration: time,
        repeat: -1,
        ease: Linear.easeNone,
        modifiers: {
          x: (x) => `${parseFloat(x) % distance}px`,
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, [screenSize]);

  return (
    <>
      <Header />
      <MobileHeader />
      <div className={styles.firstContainer}>
        <div className={styles.tittles}>
          <SectionName sectionText={firstContainer.sectionName} />
          <SectionTitle sectionText={firstContainer.sectionTitle} />
        </div>
        <div className={styles.movingImages} ref={containerRef}>
          {firstContainer.cardData.map((data, index) => (
            <div
              className={`${styles.movingImage} ${styles[`movingImage${index + 1}`]
                }`}
              key={index}
            >
              <img src={data} alt={`img ${index + 1}`} />
            </div>
          ))}
          {firstContainer.cardData.map((data, index) => (
            <div
              className={`${styles.movingImage} ${styles[`movingImage${index + 1}`]
                }`}
              key={`duplicate-${index}`}
            >
              <img src={data} alt={`duplicate img ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <Container2 content={container2} />
      <Container3 content={container3} mHeight="430vw" />

      <Container7 />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
