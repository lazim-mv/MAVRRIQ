import React from "react";
import styles from "./container5.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container5 } from "@/app/Contents/content";
import Image from "next/image";

const Container5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={container5.img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <SectionName sectionText={container5.sectionName} />
        <SectionTitle sectionText={container5.SectionTitle} />
        <SectionDescription sectionText={container5.desc} />
        <BtnComponent buttonText={container5.btnText} customClassName="container2ArrowWraper" />
      </div>
    </div>
  );
};

export default Container5;
