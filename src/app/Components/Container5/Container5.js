import React from "react";
import styles from "./container5.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";

const Container5 = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={content?.img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <SectionName sectionText={content?.sectionName} />
        <SectionTitle sectionText={content?.SectionTitle} />
        <SectionDescription sectionText={content?.desc} />
        {content?.desc2 && <SectionDescription sectionText={content.desc2} />}
        <a href="/pages/About">
          <BtnComponent buttonText={content?.btnText} customClassName="container2ArrowWraper" />
        </a>
      </div>
    </div>
  );
};

export default Container5;
