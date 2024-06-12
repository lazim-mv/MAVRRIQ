"use client";
import React, { useEffect, useState } from "react";
import styles from "./testimonial.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { testimonial } from "@/app/Contents/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import ArrowButtons from "../ArrowButton/ArrowButtons";

const Testimonial = () => {
  const cardData = testimonial.cardData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const totalData = testimonial.cardData.length;
  const clicks = isSmallScreen ? totalData - 1 : totalData - 2;
  const dynamicValue = isSmallScreen ? 70 : 27.380952381;

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <SectionName sectionText={testimonial.sectionName} />
        <SectionTitle sectionText={testimonial.sectionTitle} />
        <BtnComponent
          buttonText={testimonial.btnText}
          customClassName="container2ArrowWraper"
        />
        <div className={styles.arrowContainer}>
          <ArrowButtons prevImage={prevImage} nextImage={nextImage} />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div
              className={styles.card}
              style={{
                transform: `translateX(-${currentIndex * dynamicValue}vw)`,
                transition: `transform 3s ease, ${
                  !isSmallScreen ? "width" : "height"
                } 3s ease`,
              }}
              key={index}
            >
              <SectionDescription sectionText={data.desc} />
              <div className={styles.info}>
                <Image
                  src={data.img}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
                <div className={styles.nameAndDesignation}>
                  <SectionDescription sectionText={data.name} />
                  <SectionDescription sectionText={data.designation} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
