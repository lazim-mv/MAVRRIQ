"use client"
import React from "react";
import styles from "./hero.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { hero } from "@/app/Contents/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";

const Hero = () => {
  const { windowSize, isSmallScreen } = useWindowSize();
  return (
    <div className={styles.heroContainer}>
      <div className={styles.left}>
        <SectionName sectionText={hero.sectionName} />
        <h1>{hero.SectionTitle}</h1>
        <BtnComponent
          buttonText={hero.btnText}
          marginTop="2.1164021164021163vw"
          customClassName="container2ArrowWraper"
        />
      </div>
      <div className={styles.right}>
        <Image
          src={isSmallScreen ? hero.mImg: hero.img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Hero;
