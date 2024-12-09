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

const Container2 = ({ content, clientLogos }) => {
  const imageSources = [
    "/clientLogos/1.svg",
    "/clientLogos/2.svg",
    "/clientLogos/3.svg",
    "/clientLogos/4.svg",
    "/clientLogos/5.svg",
    "/clientLogos/6.svg",
    "/clientLogos/7.svg",
    "/clientLogos/8.svg",
    "/clientLogos/9.svg",
    "/clientLogos/10.svg",
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
              <a href="/pages/About">
                <BtnComponent
                  buttonText={content?.btnText}
                  customClassName="container2ArrowWraper"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.clientsImgContainer}>
        {clientLogos && <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="100"
          duration="20"
        />}
      </div>
    </>
  );
};

export default Container2;
