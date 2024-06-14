"use client";
import React, { useState } from "react";
import styles from "./container7.module.css";
import { CardHeading, SectionName, SectionTitle } from "../ButtonComponent";
import { container7 } from "@/app/Contents/content";
import Image from "next/image";

const Container7 = () => {
  const cardData = container7.cardData;
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
    <div className={styles.container}>
      <div className={styles.tittle}>
        <SectionName sectionText={container7.sectionName} />
        <SectionTitle sectionText={container7.sectionTitle} />
      </div>

      <div className={styles.cards}>
        {container7.cardData.map((data, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`${styles.card} ${
              answerVisible[index] ? styles.visible : ""
            }`}
          >
            <div className={styles.left}>
              <h6>{data.jobTime}</h6>
            </div>
            <div className={styles.right}>
              <div className={styles.headingText}>
                <CardHeading sectionText={data.cardHeading} />
                <p>{data.location}</p>
              </div>
              <div
                className={`${styles.details} ${
                  answerVisible[index] ? styles.expanded : styles.collapsed
                }`}
              >
                {answerVisible[index] && (
                  <>
                    <p className={styles.desc1}>{data.desc1}</p>
                    <p className={styles.desc2}>{data.desc2}</p>
                    <div className={styles.points}>
                      {data.points.map((point, idx) => (
                        <div className={styles.bulletPointWrap} key={idx}>
                          <li className={styles.point}>{point}</li>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container7;
