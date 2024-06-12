"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { contact } from "@/app/Contents/content";
import Image from "next/image";

const Contact = () => {
  const cardData = contact.cardData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData, "Don't Click");
  };
  return (
    <div className={styles.container}>
      <SectionName sectionText={contact.sectionName} />
      <div className={styles.sectionTitle}>
        <SectionTitle sectionText={contact.sectionTitle} />
      </div>

      <div>
        <div className={styles.greyContainer}>
          <div className={styles.left}>
            <h3 className={styles.sayHello}>Say Hello.</h3>
            <div className={styles.cards}>
              {cardData.map((data, index) => (
                <div className={styles.card} key={index}>
                  <Image
                    src={data.icon}
                    alt="Asian Engineer"
                    width={100}
                    height={100}
                    quality={100}
                    priority={true}
                    unoptimized
                  />
                  <h3>{data.text}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <div className={styles.input}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className={styles.input}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.input}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.input}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className={styles.textBox}>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className={styles.formSubmit}>
                <BtnComponent
                  buttonText={contact.btnText}
                  customClassName="container2ArrowWraper"
                  customClassNameH5="contactArrowWrapper"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
