import React from "react";
import styles from "./blogs.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { blogs } from "@/app/Contents/content";
import Image from "next/image";
import icon from "../../../../public/blog/icon.png"

const Blogs = () => {
  return (
    <div className={styles.container}>
      <SectionName sectionText={blogs.sectionName} textAllign="center" />
      <SectionTitle sectionText={blogs.sectionTitle} textAllign="center" />
      <div className={styles.cards}>
        {blogs.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={icon}
              width={98}
              height={100}
              alt={data.cardHeading}
              className={styles.icon}
            />
            <Image
              src={data.img}
              alt={data.cardHeading}
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              className={styles.cardImg}
            />
            <div className={styles.contents}>
              <div className={styles.contentH4}>
                <SectionName sectionText={data.sectionName} />
              </div>
              <CardHeading sectionText={data.cardHeading} />
              <SectionDescription sectionText={data.desc} />
            </div>
          </div>
        ))}
      </div>
      <a href="/pages/Blogs">
        <div className={styles.btnContainer}>
          <BtnComponent
            buttonText={blogs.btnText}
            customClassName="container2ArrowWraper"
          />
        </div>
      </a>
    </div>
  );
};

export default Blogs;
