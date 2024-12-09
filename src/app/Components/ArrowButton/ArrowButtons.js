import React from "react";
import styles from "./arrowbutton.module.css";
import Image from "next/image";
import leftImage from "../../../../public/testimonial/left.png"
import rightImage from "../../../../public/testimonial/right.png"

const ArrowButtons = ({ nextImage, prevImage, margin, width }) => {
  return (
    <div
      className={styles.carouselButtonContainer}
      style={{ margin: margin, width: width }}
    >
      <div
        onClick={prevImage}
        className={`${styles.carouselButtonContainerLeft} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src={leftImage}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
      <div
        onClick={nextImage}
        className={`${styles.carouselButtonContainerRight} ${styles.carouselHover}`}
      >
        <Image
          width={377}
          height={420}
          src={rightImage}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ArrowButtons;
