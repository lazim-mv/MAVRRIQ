import React, { useEffect, useState } from "react";
import styles from "./container3.module.css";
import Image from "next/image";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";
import bgImg from "../../../../public/bg.png";
import mbgImg from "../../../../public/mbg.png";
import { container3 } from "@/app/Contents/content";

const Container3 = ({ content, page, mHeight }) => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  console.log(content, "content");
  const cardData = content ? content.cardData : "";
  if (!content) {
    return <h1>loading</h1>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} style={{ height: screenSize < 768 && mHeight }}>
        <Image
          src={screenSize > 768 ? bgImg : mbgImg}
          alt="servicesBackground"
        />
        <div className={styles.cardHeadingContent}>
          <SectionName sectionText={content.sectionName} dotColor="#fff" />
          <SectionTitle sectionText={content.SectionTitle} />
        </div>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <Image src={data.img} width={20} height={20} />
              <CardHeading sectionText={data.cardHeading} />
              <SectionDescription sectionText={data.cardDescription} />
            </div>
          ))}
        </div>
        {page && (
          <div className={styles.btnAbsolute}>
            <BtnComponent
              buttonText="Contact Us"
              customClassName="container2ArrowWraper"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container3;
