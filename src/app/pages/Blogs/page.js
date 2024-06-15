"use client";
import React, { useEffect, useState } from "react";
import styles from "./blogpage.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/Components/ButtonComponent";
import { firstContainer } from "./data";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import Image from "next/image";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";

const page = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  if (screenSize) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.firstContainer}>
          <div className={styles.tittle}>
            <SectionName sectionText={firstContainer.sectionName} />
            <SectionTitle sectionText={firstContainer.sectionTitle} />
          </div>
          <div className={styles.cards}>
            {firstContainer.cardData.map((data, index) => (
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={data.img} alt="Asian Engineer" />
                  <div className={styles.arrowImg}>
                    <Image
                      src={data.arrowImg}
                      alt="Asian Engineer"
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.content}>
                  <SectionName sectionText={data.date} />
                  <CardHeading sectionText={data.cardHeading} />
                  {screenSize > 768 && (
                    <SectionDescription sectionText={data.desc} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Contact />
        <Footer />
      </>
    );
  }
};

export default page;
