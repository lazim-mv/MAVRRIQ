"use client";
import Image from "next/image";
import underMaintainance from "../../../../public/maintainance.json";
import styles from "./matainance.module.css";

import dynamic from "next/dynamic";
// import { SectionTitle } from "./ButtonComponent";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const UnderMaintainance = () => {
  return (
    <>
      <div className={styles.maintainance}>
        <div className={styles.maintainceLogo}>
          {/* <Image
            src="/logo.svg"
            width={180}
            height={60}
            alt="ImageHeader"
            quality={100}
            priority={true}
            unoptimized
          /> */}
          <h1 className={styles.logoBrandName}>MAVRRIQ</h1>
          <h1 className={styles.comingSoon}>Coming Soon</h1>
          {/* <SectionTitle
            sectionText="Coming Soon"
            padding="0 0 0.3306878306878307vw 0"
          /> */}
          <p>
            Our Website is under Maintenance. We&apos;ll be here soon with our
            new awesome site
          </p>
        </div>

        <Lottie
          animationData={underMaintainance}
          loop={true}
          className={styles.lottieMaintainance}
        />
      </div>
    </>
  );
};

export default UnderMaintainance;
