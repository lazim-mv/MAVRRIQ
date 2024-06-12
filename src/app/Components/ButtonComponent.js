"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../utils/windowSize";

const BtnComponent = ({
  borderColor,
  bg,
  color,
  width,
  buttonText,
  margin,
  arrow,
  h5Margin,
  arrowColor,
  height,
  header,
  customClassName,
  customClassNameH5,
  marginTop,
}) => {
  return (
    <div
      className="buttonBackgroundSVGContatiner"
      style={{ marginTop: marginTop && marginTop }}
    >
      <div className="buttonBackgroundSVG">
        <svg
          className="svgBackgroundImg"
          viewBox="0 0 193 46"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46H128C134.158 46 139.75 43.5802 143.879 39.6396C146.377 37.2543 151.623 37.2543 154.121 39.6395C158.25 43.5802 163.842 46 170 46C182.703 46 193 35.7025 193 23C193 10.2975 182.703 0 170 0C163.842 0 158.25 2.41984 154.121 6.36045C151.623 8.74574 146.377 8.74574 143.879 6.36045C139.75 2.41984 134.158 0 128 0H23Z"
            fill="#3763EB"
          />
        </svg>
        <div className={`overLay ${customClassNameH5}`}>
          <h5
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {buttonText}
          </h5>
        </div>
        <div className="overLayArrowContainer">
          <div className={`overLayArrow ${customClassName}`}>
            <Image
              className="arrow"
              src="/arrow.svg"
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
            <Image
              className="arrow arrowCopy"
              src="/arrow.svg"
              alt="Asian Engineer"
              width={100}
              height={100}
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionName = ({ sectionText, width, textAllign, margin }) => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, [screenSize]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: margin && margin,
        marginBottom: "0.7936507936507936vw",
        gap: screenSize < 768 ? "2.1333333333333333vw" : "0.5291005291005291vw",
      }}
    >
      <div className="dot"></div>
      <h4
        style={{
          textAlign: textAllign,
          textTransform: "uppercase",
          width: width,
          borderBottom: "0.06613756613756613vw solid rgba(255, 255, 255, 0.6)",
        }}
      >
        {sectionText}
      </h4>
    </div>
  );
};

const SectionTitle = ({
  sectionText,
  color,
  secondaryWordColor,
  weight,
  padding,
  width,
  textAllign,
  wordIndex,
  margin,
}) => {
  const words = (sectionText || "").split(" ");

  return (
    <h2
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={
            wordIndex && wordIndex.includes(index) ? "highlighted" : ""
          }
          style={{
            color: Array.isArray(wordIndex)
              ? wordIndex.includes(index)
                ? secondaryWordColor
                : "inherit"
              : index === wordIndex
              ? secondaryWordColor
              : "inherit",
          }}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

const CardHeading = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <h3
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </h3>
  );
};

const SectionDescription = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <p
      style={{
        color: color,
        fontWeight: weight,
        paddingBottom: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </p>
  );
};

export {
  BtnComponent,
  SectionTitle,
  SectionName,
  SectionDescription,
  CardHeading,
};
