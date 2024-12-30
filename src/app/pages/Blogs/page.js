"use client";
import React, { useEffect, useState } from "react";
import styles from "./blogpage.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/Components/ButtonComponent";
import { firstContainer } from "./data";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import Image from "next/image";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";
import { client } from "../../sanity";
import arrow from "../../../../public/blog/icon.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [blogdata, setBlogdata] = React.useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(priority asc){
                  title,
                  time_to_read,
                  slug,
                  "imageUrl": image.asset->url, 
                  content,
                  
                  priority,
                }`
      )
      .then((data) => {
        console.log(data, "Sanity Data");
        // setData(data);
        setBlogdata(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  const handleRedirect = (slug) => {
    router.push(`Blogs/${slug}`);
  };

  if (screenSize) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.firstContainer}>
          <div className={styles.tittle}>
            <SectionName sectionText={firstContainer.sectionName} />

            <SectionTitle sectionText={firstContainer.sectionTitle} />
          </div>
          <div className={styles.cards}>
            {console.log("blogdata=", blogdata)}
            {blogdata.map((data, index) => (
              <div
                className={styles.card}
                key={index}
                onClick={() => handleRedirect(data?.slug.current)}
              >
                <div className={styles.imgContainer}>
                  <img
                    src={data?.imageUrl}
                    alt="Mavrriq blogs"
                    className={styles.relatedImages}
                  />
                  <p style={{ color: "black" }}>{data?.title}</p>

                  <div className={styles.arrowImg}>
                    <Image
                      src={arrow}
                      alt="Asian Engineer"
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                    />
                  </div>
                </div>

                <div className={styles.content}>
                  <SectionName sectionText={data?.time_to_read + " Min Read"} />

                  <CardHeading sectionText={data?.title} />
                  {screenSize > 768 && (
                    <SectionDescription
                      sectionText={
                        data?.content[0]?.content
                          .split(" ")
                          .slice(0, 9)
                          .join(" ") + "..."
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Contact />
        <Footer />
      </>
    );
  }
};

export default Page;
