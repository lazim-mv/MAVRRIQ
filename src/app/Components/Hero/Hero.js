"use client";
import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { hero } from "@/app/Contents/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import heroImg from "../../../../public/hero/1.png";
import mHeroImg from "../../../../public/hero/m1.png";
import coverImage from "../../../../public/container2/1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { windowSize, isSmallScreen } = useWindowSize();
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    gsap.set(image, { scale: 1.1 });
    // Define GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Initial scale
    const initialScale = 1.1;
    const minScale = 1.0;

    // Calculate scale range
    const scaleRange = initialScale - minScale;

    // Add scaling animation
    tl.to(image, {
      scale: minScale,
      duration: 4,
      ease: "power1.out",
      onUpdate: () => {
        const currentScale = minScale + tl.progress() * scaleRange;
        if (currentScale >= minScale && currentScale <= initialScale) {
          tl.vars.scale = currentScale;
        }
        console.log(currentScale, "proooog");
      },
    });

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.left}>
          {/* <SectionName sectionText={hero.sectionName} /> */}
          <h1>
            Welcome to<span> Mavrriq</span> Corporate Professionals
          </h1>
          <SectionDescription
            sectionText={hero.desc}
            width="57.67195767195767vw"
          />
          <div className={styles.heroBtn}>
            <BtnComponent
              buttonText={hero.btnText}
              marginTop="2.1164021164021163vw"
              customClassName="container2ArrowWraper"
            />
          </div>
        </div>
      </div>
      <div className={styles.imgContainer1}>
        <img
          ref={imageRef}
          src={isSmallScreen ? mHeroImg.src : coverImage.src}
          alt="Asian Engineer"
          className={styles.heroImage}
          style={{ transform: "scale(1.2)" }}
        />
      </div>
    </>
  );
};

export default Hero;
