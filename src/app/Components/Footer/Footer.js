"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { footer, socialIcons } from "@/app/Contents/content";
import Image from "next/image";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";

const Footer = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  return (
    <div className={styles.container}>
      <div className={styles.bgContainer}>
        <Image
          src={screenSize < 768 ? footer.mBg : footer.bg}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
          className={styles.bgImage}
        />
        <div className={styles.titles}>
          <SectionTitle sectionText={footer.sectionTitle} />
          <a href="/pages/Contact">
            <BtnComponent
              buttonText={footer.btnText}
              customClassName="container2ArrowWraper"
            />
          </a>
        </div>
        <div className={styles.absoluteContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.firstCol}>
              <div className={styles.logoContainer}>
                <Image
                  src={footer.logo}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
              <SectionDescription sectionText={footer.tagLine} />
            </div>
            <div className={styles.secondCol}>
              <SectionDescription sectionText="Quick Links" />
              <div className={styles.links}>
                <div>
                  <a href="/pages/About">About</a>
                </div>
                <div>
                  <a href="/pages/Careers">Careers</a>
                </div>
                <div>
                  <a href="/pages/Blogs">Blogs</a>
                </div>
                <div>
                  <a href="/pages/Contact">Contact Us</a>
                </div>
              </div>
            </div>
            <div className={styles.thirdCol}>
              <SectionDescription sectionText="Get In Touch" />
              <div className={styles.address}>
                {footer.getInTouch.map((data, index) => (
                  <div className={styles.card} key={index}>
                    <Image
                      src={data.icon}
                      alt="Asian Engineer"
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                    <h3>{data.text}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.fourthCol}>
              <SectionDescription sectionText="Social Media" />
              <div className={styles.socials}>
                {socialIcons.map((data, index) => (
                  <a href={data.href} target="_blank" key={index}>
                    <Image
                      // src={mobile ? data.mbImg : data.img}
                      src={data.img}
                      width={130}
                      height={101}
                      alt={`Social Icon ${index + 1}`}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.copyRightContainer}>
            <p className={styles.copyRight}>
              © 2025 All Right Reserved | Powered by procube.cx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
