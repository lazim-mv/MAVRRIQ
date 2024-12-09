"use client";
import React from "react";
import styles from "./container2.module.css";
import Image from "next/image";
import { container2 } from "@/app/Contents/content";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import Brands from "../brands/Brands";
import { useWindowSize } from "@/app/utils/windowSize";

const Container2 = ({ content }) => {
  const imageSources = [
    "/brands/1.svg",
    "/brands/2.svg",
    // "/brands/3.svg",
    "/brands/4.svg",
    "/brands/5.svg",
    "/brands/6.svg",
    "/brands/7.svg",
    "/brands/8.svg",
    "/brands/9.svg",
    "/brands/10.svg",
    "/brands/11.svg",
    "/brands/12.svg",
    "/brands/13.svg",
    "/brands/14.svg",
    "/brands/15.svg",
    "/brands/16.svg",
    "/brands/17.svg",
    "/brands/18.svg",
    "/brands/19.svg",
  ];

  const repeatedImageSources = Array.from({ length: 20 }, () => [
    ...imageSources,
  ]).flat();

  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <span className={styles.spanSectionName}>
            <span className={styles.spanDot}></span>
            {content.sectionName}
          </span>
          <h2 className={styles.spanAndH2}>
            {isSmallScreen ? (
              <></>
            ) : (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </>
            )}
            {content?.SectionTitle}
          </h2>
          <div className={styles.descriptionContainer}>
            <SectionDescription
              sectionText={content?.desc1}
            />
            <SectionDescription
              sectionText={content.desc2}
            />
            {content.desc3 &&
              <SectionDescription sectionText={content.desc3} />
            }

            {content?.btnText && (
              <BtnComponent
                buttonText={content?.btnText}
                customClassName="container2ArrowWraper"
              />
            )}
          </div>
        </div>
      </div>
      {/* <div className={styles.clientsImgContainer}>
        <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="600"
          duration="650"
        />
      </div> */}
    </>
  );
};

export default Container2;
