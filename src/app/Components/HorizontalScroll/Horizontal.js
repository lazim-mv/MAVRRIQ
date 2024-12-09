"use client";
import React, { useEffect } from "react";
import styles from "./horizontal.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { container5Data } from "@/app/pages/About/data";

const Horizontal = () => {
  const cardData = container5Data.cardData;
  const color = [
    "#585569ff",
    "#f5ece1ff",
    "#7eb2ccff",
    "#7d7a7dff",
    "#24302cff",
  ];

  const { windowSize, isSmallScreen } = useWindowSize();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const breakPoint = 768;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          let sections = gsap.utils.toArray(`.${styles.card}`);
          console.log(sections, "sssssssssection");
          gsap.to(sections, {
            xPercent: -70 * (sections.length - 1.8),
            ease: "none",
            scrollTrigger: {
              trigger: `.${styles.card}`,
              start: "bottom 80%",
              end: "bottom top",
              scrub: 1,
              // markers: true,
            },
          });

          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        } else if (isMobile) {
          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        }

        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.stickyContainer}>
        <div className={styles.topHeadingContainer}>
          <SectionName
            sectionText={container5Data.sectionName}
            dotColor="rgba(255, 255, 255, 0.8)"
          />
          <div className={styles.tittle}>
            <SectionTitle sectionText={container5Data.sectionTitle} />
          </div>
        </div>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.container5Img}>
                <Image
                  unoptimized
                  src={data.img}
                  width={100}
                  height={0}
                  alt="ImageClients"
                />
              </div>
              <div className={styles.cardHeadingAndButton}>
                <h6>{data.cardHeading}</h6>
                <SectionDescription sectionText={data.desc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
