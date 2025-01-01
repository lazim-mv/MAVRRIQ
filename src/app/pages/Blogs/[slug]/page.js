"use client";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";
import Header from "@/app/Components/Header/Header";
import MobileHeader from "@/app/Components/MobileHeader/MobileHeader";
import Contact from "@/app/Components/Contact/Contact";
import Footer from "@/app/Components/Footer/Footer";
import styles from "../blogpage.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "@/app/Components/ButtonComponent";
import Image from "next/image";
import arrow from "../../../../../public/blog/icon.png";
import { useRouter } from "next/navigation";

const getImageUrl = (ref) => {
  const projectId = client.config().projectId;
  const dataset = client.config().dataset;

  const [prefix, id, dimensions, format] = ref.split("-");
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
};

export default function BlogPost({ params }) {
  const router = useRouter();

  const [blogPost, setBlogPost] = useState(null);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (params.slug) {
      setBlogPost(null);
      client
        .fetch(
          `*[_type == "blog"] {
  title,
  time_to_read,
  priority,
  "imageUrl": image.asset->url,
  slug,
  content
}`
        )
        .then((data) => {
          // blog with the matching slug
          const singlePost = data.find(
            (item) => item.slug.current === params.slug
          );
          setBlogPost(singlePost);

          const otherData = data
            .filter((item) => item.slug.current !== params.slug)
            .slice(0, 3);
          setAllData(otherData); // for related blogs
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [params.slug]);

  const handleRedirect = (slug) => {
    router.push(`${slug}`);
  };

  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);

  if (!blogPost) return <div>Loading...</div>;
  if (screenSize) {
    return (
      <>
        <Header />
        <MobileHeader />
        <div className={styles.firstContainer}>
          <div className={styles.firstContainerInner}>
            <div className={styles.tittle}>
              <SectionTitle sectionText={blogPost.title} />

              <SectionName sectionText={blogPost.time_to_read + " min read"} />
            </div>
            <div className={styles.blogImageContainer}>
              <img
                src={blogPost.imageUrl}
                alt={blogPost.title}
                className={styles.blogImage}
                style={{ marginBottom: "2.5rem", borderRadius: "1.5rem" }}
              />

              <div className={styles.contentContainer}>
                {blogPost.content.map((block, index) => {
                  if (block.type === "subheading") {
                    return (
                      <div key={index} style={{ padding: "0.5rem 0 1rem 0" }}>
                        <CardHeading sectionText={block.content} />
                      </div>
                    );
                  } else if (block._type === "image") {
                    return (
                      <div key={index}>
                        <img
                          src={getImageUrl(block.asset._ref)}
                          alt="blog image"
                          className={styles.optionalImage}
                          style={{ margin: "1.5rem 0 1rem 0" }}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} style={{ padding: "0 0 1rem 0" }}>
                        <SectionDescription sectionText={block.content} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.firstContainer}>
          <div className={styles.secondContainerInner}>
            <div className={styles.tittle}>
              <SectionName sectionText={"Related Blogs"} />

              <SectionTitle
                sectionText={"Read Through Our Perspectives & Latest Updates"}
              />
            </div>

            <div className={styles.cards}>
              {allData.map((data, index) => (
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
                    <SectionName
                      sectionText={data?.time_to_read + " Min Read"}
                    />

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

            <a href="/pages/Blogs">
              <div className={styles.btnContainer}>
                <BtnComponent
                  buttonText={"Know More"}
                  customClassName="container2ArrowWraper"
                />
              </div>
            </a>
          </div>
        </div>

        <Contact />
        <Footer />
      </>
    );
  }
}
