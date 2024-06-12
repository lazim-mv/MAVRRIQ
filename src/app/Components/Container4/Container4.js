"use client";
import React, { useEffect, useState } from "react";
import styles from "./container4.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container4 } from "@/app/Contents/content";
import { useWindowSize } from "@/app/utils/windowSize";

const Container4 = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  const datas = [
    {
      name: "Business Category",
      number: "1",
    },
    {
      name: "Preferred Jurisdiction",
      number: "2",
    },
    {
      name: "shareholders",
      number: "3",
    },
    {
      name: "Residence Visas",
      number: "4",
    },
    {
      name: "Office Space",
      number: "5",
    },
    {
      name: "Contact Details",
      number: "6",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <SectionName sectionText={container4.sectionName} />
        <SectionTitle sectionText={container4.SectionTitle} />
        <div className={styles.greyContainer}>
          <div className={styles.left}>
            <div className={styles.line}></div>
            {datas.map((data, index) => (
              <div className={styles.numberAndName} key={index}>
                <div className={styles.number}>
                  <h3>{data.number}</h3>
                </div>
                {screenSize > 768 && (
                  <h4 className={styles.name}>{data.name}</h4>
                )}
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <CardHeading sectionText={container4.cardHeading} />
            <SectionDescription sectionText={container4.desc} />
            <select className={styles.dropDown} defaultValue="" required>
              <option value="" disabled hidden>
                Choose any
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className={styles.btn}>
              <BtnComponent
                buttonText={container4.btnText}
                customClassName="container2ArrowWraper"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container4;
