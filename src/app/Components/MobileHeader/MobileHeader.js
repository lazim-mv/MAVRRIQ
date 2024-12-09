"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./mobileHeader.module.css";
import { BtnComponent } from "../ButtonComponent";
import { useLenis } from "@studio-freight/react-lenis";
import logo from "../../../../public/logo.svg";
import wlogo from "../../../../public/footer/logo.svg";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/pages/About/" },
    {
      text: "Our Presence",
      href: "#",
      hasDropdown: true,
    },
    { text: "Careers", href: "/pages/Careers/" },
    { text: "Blogs", href: "/pages/Blogs/" },
    { text: "Contact Us", href: "/pages/Contact/" },
  ];

  const dropDownContent = [
    {
      text: "Saudi Arabia",
      href: "/pages/SaudiArabia/",
      img: "/header/m1.png",
      icon: "/header/arrow.png",
    },
    {
      text: "India",
      href: "/pages/India/",
      img: "/header/m1.png",
      icon: "/header/arrow.png",
    },
    {
      text: "Oman",
      href: "/pages/Oman/",
      img: "/header/m1.png",
      icon: "/header/arrow.png",
    },
  ];

  return (
    <div
      className={styles.mHeader}
      style={{
        backgroundColor: isMenuOpen ? "#2d2e2e" : "#ffffff",
        height: "16.266666666666666vw",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background-color 0.2s ease", // Specify transition for backgroundColor
      }}
    >
      <div
        className={`mHeaderContainer ${styles.mHeaderContainer}`}
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <a href="/">
          <div className={styles.imgContainer}>
            <img src={isMenuOpen ? wlogo.src : logo.src} alt="ImageHeader" />
          </div>
        </a>
        <div
          aria-label="HamburgerMenu"
          onClick={toggleMenu}
          className={`${styles.bars} ${isMenuOpen ? styles.open : ""}`}
          style={{ position: "relative", display: "flex", border: "none" }}
        >
          <span
            className={`bar ${styles.bar}`}
            style={{ background: isMenuOpen && "#ffffff" }}
          ></span>
          <span
            className={`bar ${styles.bar}`}
            style={{ background: isMenuOpen && "#ffffff" }}
          ></span>
          <span
            className={`bar ${styles.bar}`}
            style={{ background: isMenuOpen && "#ffffff" }}
          ></span>
        </div>
        <div
          className={styles.openMenu}
          style={{
            height: isMenuOpen ? "100vh" : "0vh",
            opacity: isMenuOpen ? 1 : 0,
            overflow: "scroll",
            transition: "height 0.8s ease, opacity 0.8s ease",
            transitionDelay: isMenuOpen ? "0.1s" : "0s",
          }}
        >
          <div
            className={`hMenu ${styles.hMenu}`}
            style={{
              height: isMenuOpen ? "auto" : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-4.8vw)",
              transition: "transform 0.4s ease, height 0.1s ease",
            }}
          >
            {menuList.map((item, index) => (
              <div key={index} style={{ position: "relative" }}>
                {item.hasDropdown ? (
                  <>
                    <div
                      className={`linksWrapper linksText ${pathname !== undefined &&
                          pathname !== null &&
                          pathname !== "" &&
                          pathname === item.href
                          ? "active"
                          : ""
                        } ${styles.linksWrapper} ${styles.linksText}`}
                      onClick={toggleDropdown}
                      style={{
                        cursor: "pointer",
                        color: "#ffffff",
                      }}
                    >
                      {item.text}
                      <svg
                        className={styles.arrowIcon}
                        width="15"
                        height="8"
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: isDropdownOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                          marginLeft: "5px",
                          fill: "#ffffff",
                        }}
                      >
                        <path
                          d="M13.5 1L7.5 7L1.5 1"
                          stroke="#010202"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div
                      className={styles.dropdownContent}
                      style={{
                        height: isDropdownOpen ? "30.5vw" : "0px",
                        opacity: isDropdownOpen ? 1 : 0,
                        marginTop: isDropdownOpen ? "5.333333333333334vw" : 0,
                        overflow: "hidden",
                        transition:
                          "height 0.4s ease, opacity 0.4s ease, margin 0.8s ease",
                        transitionDelay: isDropdownOpen ? "0.1s" : "0s",
                      }}
                    >
                      {dropDownContent.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          className={styles.dropdownItem}
                        >
                          <img
                            src={dropdownItem.img}
                            alt={dropdownItem.text}
                            className={styles.dropdownItemImage}
                          />
                          {dropdownItem.text}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`linksWrapper linksText ${pathname !== undefined &&
                        pathname !== null &&
                        pathname !== "" &&
                        pathname === item.href
                        ? "active"
                        : ""
                      } ${styles.linksWrapper} ${styles.linksText}`}
                    style={{
                      transform: isMenuOpen
                        ? "translateY(0)"
                        : "translateY(-100vw)",
                    }}
                  >
                    {item.text}
                  </a>
                )}
              </div>
            ))}
            <a href="/" style={{ display: isMenuOpen ? "block" : "none" }}>
              <BtnComponent
                buttonText="Get in Touch"
                header={true}
                bg="#A0153E"
                arrow={true}
                color="#ffffff"
                buttonContainerClassName="headerButton"
              />
            </a>
          </div>
          <div className={styles.socials}>
            <a href="">Social Media</a>
            <div className={styles.socialIcons}>
              <img src="/header/Facebook.svg" alt="fb" />
              <img src="/header/Facebook.svg" alt="fb" />
              <img src="/header/Facebook.svg" alt="fb" />
              <img src="/header/Facebook.svg" alt="fb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
