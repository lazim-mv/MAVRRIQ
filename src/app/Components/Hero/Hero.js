"use client";
import React from "react";
import styles from "./hero.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { hero } from "@/app/Contents/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import heroImg from "../../../../public/hero/1.png";
import mHeroImg from "../../../../public/hero/m1.png";
import coverImage from "../../../../public/container2/1.png";

const Hero = () => {
  const { windowSize, isSmallScreen } = useWindowSize();
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.left}>
          <SectionName sectionText={hero.sectionName} />
          <h1>
            Leading Business Setup <span>Consultants</span> in Dubai, UAE
          </h1>
          <SectionDescription sectionText={hero.desc} />
          <div className={styles.heroBtn}>
            <BtnComponent
              buttonText={hero.btnText}
              marginTop="2.1164021164021163vw"
              customClassName="container2ArrowWraper"
            />
          </div>
        </div>

        {/* <div className={styles.right}>
          <img
            src={isSmallScreen ? mHeroImg.src : heroImg.src}
            alt="Asian Engineer"
            className={styles.heroImage}
          />
        </div> */}
      </div>
      <div className={styles.imgContainer1}>
        <img
          src={isSmallScreen ? mHeroImg.src : coverImage.src}
          alt="Asian Engineer"
          className={styles.heroImage}
        />
      </div>
    </>
  );
};

export default Hero;
