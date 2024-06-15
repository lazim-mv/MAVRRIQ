import React from "react";
import styles from "./contactpage.module.css";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import Contact from "@/app/Components/Contact/Contact";
import Container8 from "@/app/Components/Faq/Faq";
import { firstContainer } from "./data";
import Image from "next/image";
import { SectionName, SectionTitle } from "@/app/Components/ButtonComponent";
import Footer from "@/app/Components/Footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Contact />
      <div className={styles.firstContainer}>
        <div className={styles.titles}>
          <SectionName
            sectionText={firstContainer.sectionName}
            dotColor="#ffffff"
          />
          <SectionTitle sectionText={firstContainer.sectionTitle} />
        </div>
        <div className={styles.cards}>
          {firstContainer.cardData.map((data, index) => (
            <div className={styles.card}>
              <div className={styles.imgContainer}>
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
              <div className={styles.address}>
                {data.contentData.map((data, index) => (
                  <div className={styles.addressCard} key={index}>
                    <Image
                      src={data.icon}
                      alt="Asian Engineer"
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                    <p>{data.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Container8 />
      <Footer />
    </>
  );
};

export default page;
