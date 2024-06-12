"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BtnComponent } from "../ButtonComponent";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(pathname, "jkfsdfjdks");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About", href: "/pages/About" },
    { text: "Programs", href: "/pages/Programs" },
    { text: "E3 Global Zone", href: "/pages/E3Global" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0D0D0D",
        height: "21.333333333333336vw",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      className="mHeader"
    >
      <div
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
        className="mHeaderContainer"
      >
        <a href="/">
          <div>
            <Image
              src="/logo.svg"
              width={120}
              height={30}
              alt="ImageHeader"
              style={{
                width: "34vw",
                height: "4vw",
              }}
            />
          </div>
        </a>
        <button
          aria-label="HamburgerMenu"
          onClick={toggleMenu}
          className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
          style={{ position: "relative", display: "flex", border: "none" }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div
          style={{
            position: "fixed",
            top: "21.333333333333336vw",
            right: 0,
            width: "100vw",
            height: isMenuOpen ? "auto" : "0vh",
            backgroundColor: "#0D0D0D",
            zIndex: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            gap: "10px",
            opacity: isMenuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div
            className="hMenu"
            style={{
              height: isMenuOpen ? "auto" : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-4.8vw)",
              transition: "transform 0.4s ease, height 0.1s ease",
            }}
          >
            {menuList.map((item, index) => (
              <a
                key={index}
                className={`linksWrapper linksText ${
                  pathname !== undefined &&
                  pathname !== null &&
                  pathname !== "" &&
                  pathname === item.href
                    ? "active"
                    : ""
                }`}
                href={item.href}
                style={{
                  transform: isMenuOpen
                    ? "translateY(0)"
                    : "translateY(-100vw)",
                }}
              >
                {item.text}
              </a>
            ))}
            <a
              href="/pages/Contact"
              style={{ display: isMenuOpen ? "block" : "none" }}
            >
              <BtnComponent
                bg="#C8952E"
                color="#ffffff"
                width="11.45833333333333vw"
                buttonText="Contact Now"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
