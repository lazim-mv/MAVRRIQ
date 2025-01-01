"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { contact } from "@/app/Contents/content";
import Image from "next/image";

const contactData = [
  {
    id: 1,
    name: "India",
    phone: "+91 96337 77003",
    tel: "+91 96337 77003",
    email: "ca@mavrriq.com",
    location: "27/1129c Padmini Arcade near Apco Hyundai calicut kerala 673004",
  },
  {
    id: 1,
    name: "Saudi Arabia",
    phone: "+966 511587575, +966 511597575",
    tel: "+966 511587575",
    email: "ca@mavrriq.com",
    location:
      "Office No:318, Building No: 7097, 2106, Jabor bin Rashid Road, Al Murabba, Riyadh, 12628 Riyadh, KSA",
  },
  {
    id: 1,
    name: "Oman",
    phone: "+968 77208850",
    tel: "+968 77208850",
    email: "ca@mavrriq.com",
    location:
      "Office No. 201, 2nd Floor, Majan1 Building, PO Box 114, postal code 315, Ghala Heights, Muscat",
  },
];

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

  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleChangeDrop = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Filter data based on the selected country
  const filteredData = contactData.filter(
    (data) => data.name === selectedCountry
  );

  return (
    <div className={styles.container}>
      <SectionName sectionText={contact.sectionName} />
      <div className={styles.sectionTitle}>
        <SectionTitle sectionText={contact.sectionTitle} />
      </div>

      <div>
        <div className={styles.greyContainer}>
          <div className={styles.left}>
            <div className={styles.leftInner}>
              <h3 className={styles.sayHello}>Say Hello.</h3>
              <div>
                <select
                  id="subject"
                  name="subject"
                  value={selectedCountry}
                  onChange={handleChangeDrop}
                  className={styles.customSelect}
                  required
                >
                  <option value="India">India</option>
                  <option value="Oman">Oman</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>
            </div>
            <div className={styles.cards}>
              {filteredData.map((data) => (
                // <div className={styles.card} key={data.id}>
                <div key={data.id}>
                  <a
                    href={`tel:${data.tel}`}
                    className={styles.contactDynamicData}
                  >
                    <Image
                      src="/contact/call.svg"
                      alt={`${data.name} Office`}
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                      className={styles.contactIcon}
                    />

                    <p style={{ color: "white" }}>
                      {data.phone.split(",").map((phone, index) => (
                        <span key={index}>
                          {index === 1 && <br />}

                          {phone.trim()}
                        </span>
                      ))}
                    </p>
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className={styles.contactDynamicData}
                  >
                    <Image
                      src="/contact/mail.svg"
                      alt={`${data.name} Office`}
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                      className={styles.contactIcon}
                    />

                    <p style={{ color: "white" }}>{data.email}</p>
                  </a>

                  <div
                    className={styles.contactDynamicData}
                    style={{ alignItems: "flex-start" }}
                  >
                    <Image
                      src="/contact/location.svg"
                      alt={`${data.name} Office`}
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      unoptimized
                      className={styles.contactIcon}
                    />

                    <p style={{ color: "white" }}>{data.location}</p>
                  </div>
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
              {/* <div className={styles.input}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div> */}
              <div className={styles.input}>
                <select
                  id="subject"
                  name="subject"
                  className={styles.selectTag}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled className={styles.optionsContainer}>
                    Select a country
                  </option>
                  <option value="India">India</option>
                  <option value="Oman">Oman</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
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
