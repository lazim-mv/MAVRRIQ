import React from "react";
import styles from "./container3.module.css";
import Image from "next/image";
import { BtnComponent } from "../ButtonComponent";

const Container3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/container3/1.png"
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
