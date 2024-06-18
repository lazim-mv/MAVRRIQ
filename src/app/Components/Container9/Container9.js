import React from "react";
import styles from "./container9.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container9 } from "./data";

const Container9 = () => {
  const content = container9;
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <SectionName sectionText={content.sectionName} />
        <SectionTitle sectionText={content.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {content.cardData.map((data, index) => (
          <div className={styles.card}>
            <CardHeading sectionText={data.heading} />
            <SectionDescription sectionText={data.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container9;
