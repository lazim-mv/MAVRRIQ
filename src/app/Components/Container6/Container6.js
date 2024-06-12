import React from "react";
import styles from "./container6.module.css";
import Image from "next/image";
import { container6 } from "@/app/Contents/content";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";

const Container6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={container6.img}
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
        />

        <div className={styles.absolute}>
          <div className={styles.content}>
            <SectionTitle sectionText={container6.SectionTitle} />
            <SectionDescription sectionText={container6.desc} />
            <BtnComponent
              buttonText={container6.btnText}
              customClassName="container2ArrowWraper"
            />
          </div>
          <div className={styles.right}>
            {container6.cardData.map((data, index) => (
              <div className={styles.imgAndIcon} key={index}>
                <Image
                  src={data.img}
                  alt="Asian Engineer"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container6;
