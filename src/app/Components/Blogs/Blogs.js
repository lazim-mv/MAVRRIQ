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

const Blogs = () => {
  return (
    <div className={styles.container}>
      <SectionName sectionText={blogs.sectionName} textAllign="center" />
      <SectionTitle sectionText={blogs.sectionTitle} textAllign="center" />
      <div className={styles.cards}>
        {blogs.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={data.img}
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
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
      <div className={styles.btnContainer}>
        <BtnComponent
          buttonText={blogs.btnText}
          customClassName="container2ArrowWraper"
        />
      </div>
    </div>
  );
};

export default Blogs;
