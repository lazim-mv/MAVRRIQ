"use client";
import React, { useEffect, useState } from "react";
import styles from "./container3.module.css";
import Image from "next/image";
import { BtnComponent } from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";

const Container3 = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={screenSize < 768 ? "/container3/m1.png" : "/container3/1.png"}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />
        <div className={styles.btnAbsolute}>
          <BtnComponent
            buttonText="Contact Us"
            customClassName="container2ArrowWraper"
          />
        </div>
      </div>
    </div>
  );
};

export default Container3;
