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
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  const totalData = testimonial.cardData.length;
  const clicks = screenSize < 768 ? totalData - 1 : totalData - 2;
  const dynamicValue = screenSize < 768 ? 70 : 27.380952381;

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
        {screenSize > 768 && (
          <>
            <BtnComponent
              buttonText={testimonial.btnText}
              customClassName="container2ArrowWraper"
            />
            <div className={styles.arrowContainer}>
              <ArrowButtons prevImage={prevImage} nextImage={nextImage} />
            </div>
          </>
        )}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div
              className={styles.card}
              style={{
                transform: `translateX(-${currentIndex * dynamicValue}vw)`,
                transition: `transform 1.5s ease, ${
                  screenSize > 768 ? "width" : "height"
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
        {screenSize < 768 && (
          <>
            <div className={styles.arrowContainer}>
              <ArrowButtons prevImage={prevImage} nextImage={nextImage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
