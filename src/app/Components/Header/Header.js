"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./header.module.css";
import { BtnComponent } from "../ButtonComponent";
import Link from "next/link";

function Header() {
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/pages/About" },
    {
      text: "Our Presence",
      href: "#",
      hasDropdown: true,
    },
    { text: "Careers", href: "/pages/Careers" },
    { text: "Blogs", href: "/pages/Blogs" },
    { text: "Contact Us", href: "/pages/Contact" },
  ];

  const dropDownContent = [
    {
      text: "India",
      href: "/pages/India",
      img: "/header/1.png",
      icon: "/header/arrow.png",
    },
    {
      text: "Oman",
      href: "/pages/Oman",
      img: "/header/2.png",
      icon: "/header/arrow.png",
    },
    {
      text: "Saudi Arabia",
      href: "/pages/SaudiArabia",
      img: "/header/3.png",
      icon: "/header/arrow.png",
    },
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  console.log(pathname, "pathname");

  return (
    <>
      <div className={`${styles.hContainer} ${styles.bgWhite}`}>
        <a href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/logo.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className={styles.hMenuContainer}>
          <div className={styles.hMenu}>
            <ul className={styles.hUlList}>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.huListTransitionWrapper} `}
                >
                  {item.hasDropdown ? (
                    <>
                      <div
                        className={`${styles.dropdownToggle} ${showDropdown ? "" : ""
                          }`}
                        onClick={toggleDropdown}
                      >
                        {item.text}
                        <img
                          src="/dropDown.svg"
                          alt="Our Presence Arrow"
                          className={styles.dropDownArrow}
                        />
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${pathname !== undefined &&
                        pathname !== null &&
                        pathname !== "" &&
                        pathname === item.href
                        ? styles.active
                        : ""
                        }`}
                    >
                      <div>{item.text}</div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="/">
          <BtnComponent
            buttonText="Get in Touch"
            borderColor="rgba(255, 255, 255, 0.6)"
            color="#fff"
            buttonContainerClassName="headerButton"
          />
        </a>

        {showDropdown && (
          <ul className={styles.dropdownMenu}>
            {dropDownContent.map((dropdownItem, idx) => (
              <li key={idx}>
                <a href={dropdownItem.href} className={styles.card}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.headerImg}
                      src={dropdownItem.img}
                      alt="Our Presence Arrow"
                    />
                    <img
                      className={styles.icon}
                      src={dropdownItem.icon}
                      alt="Our Presence Arrow"
                    />
                  </div>
                  <a>{dropdownItem.text}</a>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Header;
