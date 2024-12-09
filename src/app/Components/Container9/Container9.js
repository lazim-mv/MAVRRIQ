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



const Container9 = ({ content, className, scrollLength }) => {

  useEffect(() => {
    const mm = gsap.matchMedia();
    const breakPoint = 768;

    const initAnimations = () => {
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            const sections = gsap.utils.toArray(`.${styles.card}`);
            if (!sections.length) {
              console.warn("No sections found for animation!");
              return;
            }

            gsap.to(sections, {
              xPercent: -70 * (sections.length + scrollLength),
              ease: "none",
              scrollTrigger: {
                trigger: `.${styles.cards}`,
                start: "bottom 80%",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        }
      );
    };

    setTimeout(initAnimations, 50);
    return () => mm.revert();
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
