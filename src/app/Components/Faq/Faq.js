"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "./faq.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container8Data } from "@/app/Contents/content";

const Container8 = () => {
  const cardData = container8Data.faqData;
  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index];
      return newVisible;
    });
  };

  return (
    <div className={styles.container7} id="faq">
      <div className={styles.faqContainer}>
        <div className={styles.firstCol}>
          <SectionName sectionText={container8Data.sectionName} />
          <SectionTitle sectionText={container8Data.sectionTitle} />
          <a href="/pages/Contact">
            <div className={styles.btnContainer}>
              <BtnComponent
                buttonText="Get Started"
                customClassName="container2ArrowWraper"
              />
            </div>
          </a>
        </div>
        <div className={styles.secondCol}>
          {cardData.map((data, index) => (
            <div
              className={styles.faqDataCard}
              onClick={() => handleClick(index)}
              key={index}
            >
              <div className={styles.questionAnswerContainer}>
                <div className={styles.questionContainer}>
                  <CardHeading sectionText={data.question} weight="500" />
                  <div className={styles.plusIcon}>
                    <Image
                      src="/faq/1.svg"
                      width={16}
                      height={16}
                      alt="ImageFaq"
                      className={styles.openCloseIcon}
                      style={{
                        transform: answerVisible[index]
                          ? "rotate(0deg)"
                          : "rotate(180deg)",
                        transition: "transform .5s ease",
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.answerContainer} ${answerVisible[index] ? styles.visible : ""
                    }`}
                >
                  <SectionDescription
                    sectionText={data.answer}
                    color="#272828"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container8;
