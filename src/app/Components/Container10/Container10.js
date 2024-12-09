import React from "react";
import styles from "./container10.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";

const Container10 = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.tittle}>
          <SectionName sectionText={content.sectionName} />
          <SectionTitle sectionText={content.sectionTitle} />
        </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.cards}>
          {content.cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.number}>
                <CardHeading sectionText={data.number} />
              </div>
              <div className={styles.content}>
                <CardHeading sectionText={data.heading} />
                <SectionDescription sectionText={data.desc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container10;
