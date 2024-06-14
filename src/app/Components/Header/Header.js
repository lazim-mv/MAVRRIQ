"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./header.module.css";
import { BtnComponent } from "../ButtonComponent";
import Link from "next/link";

function Header() {
  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/pages/About/" },
    { text: "Careers", href: "/pages/Careers/" },
    { text: "Blogs", href: "/pages/Blogs/" },
    { text: "Contact Us", href: "/pages/Contact/" },
  ];

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
                  <Link
                    href={item.href}
                    className={`${
                      pathname !== undefined &&
                      pathname !== null &&
                      pathname !== "" &&
                      pathname === item.href
                        ? styles.active
                        : ""
                    }`}
                  >
                    <div>{item.text}</div>
                  </Link>
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
          />
        </a>
      </div>
    </>
  );
}

export default Header;
