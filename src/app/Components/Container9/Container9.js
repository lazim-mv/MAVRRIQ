import React, { useEffect } from "react";
import styles from "./container9.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);



const Container9 = ({ content, className }) => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

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
            xPercent: -70 * (sections.length + 1),
            ease: "none",
            scrollTrigger: {
              trigger: `.${styles.card}`,
              start: "bottom 80%",
              end: "bottom top",
              scrub: 1,
              markers: true,
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
    <div className={`${styles.container} ${className}`}>
      <div className={styles.stickyContainer}>
        <div className={styles.tittle}>
          <SectionName sectionText={content.sectionName} />
          <SectionTitle sectionText={content.sectionTitle} />
        </div>
        <div className={styles.cards}>
          {content.cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <CardHeading sectionText={data.heading} />
              <SectionDescription sectionText={data.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container9;
