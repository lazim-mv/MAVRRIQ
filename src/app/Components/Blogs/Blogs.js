"use client";
import React, { useEffect, useState } from "react";

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
import icon from "../../../../public/blog/icon.png";
import { client } from "../../sanity";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();
  const [blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(priority asc)[0...3]{
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

        setBlogdata(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleRedirect = (slug) => {
    router.push(`/pages/Blogs/${slug}`);
  };

  return (
    <div className={styles.container}>
      <SectionName sectionText={blogs.sectionName} textAllign="center" />
      <SectionTitle sectionText={blogs.sectionTitle} textAllign="center" />
      <div className={styles.cards}>
        {blogdata.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleRedirect(data?.slug.current)}
          >
            <Image
              src={icon}
              width={98}
              height={100}
              alt="arrow"
              className={styles.icon}
            />
            <Image
              src={data?.imageUrl}
              alt="mavrriq blogs"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
              className={styles.cardImg}
            />
            <div className={styles.contents}>
              <div className={styles.contentH4}>
                <SectionName sectionText={data?.time_to_read + " Min read"} />
              </div>
              <CardHeading sectionText={data.title} />
              <SectionDescription
                sectionText={
                  data?.content[0]?.content.split(" ").slice(0, 9).join(" ") +
                  "..."
                }
              />
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
