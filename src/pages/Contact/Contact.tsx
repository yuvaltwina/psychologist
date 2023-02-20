import React, { FC, useState } from "react";
import "./Style/Contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useFormik } from "formik";
import { MdReportGmailerrorred } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
const API_KEY_PUBLIC = import.meta.env.VITE_API_KEY_PUBLIC;
const API_TAMPLATE_ID = import.meta.env.VITE_API_TAMPLATE_ID;
const API_SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;
const NAME_FIELD = "fullName";
const PHONE_FIELD = "phoneNumber";
const MESSAGE = "message";
const MAIL_SUCSESS_MESSAGE = "! המייל נשלח בהצלחה";
const MAIL_FAILED_MESSAGE = "שליחה נכשלה";
const MESSAGE_PLACEHOLDER = "כאן ניתן למלא את פרטי ההודעה...";
const NAME_CHAR_KIND_MESSAGE = "שדה זה מכיל רק אותיות";
const NAME_MINLENGTH_MESSAGE = "שדה זה לא ארוך מ20 תווים";
const NAME_MAXLENGTH_MESSAGE = "שדה זה צריך להכיל לפחות 4 תווים";
const PHONE_LENGTH_MESSAGE = "שדה זה צריך להיות באורך 10 תווים";
const PHONE_CHAR_KIND_MESSAGE = "שדה זה מכיל רק ספרות";
const MESSAGE_MIN_LENGTH_MESSAGE = "שדה זה צריך להכיל לפחות 15 תווים";
const MESSAGE_MAX_LENGTH_MESSAGE = "שדה זה לא ארוך מ100 תווים";
const REQUIRED_FIELD_MESSAGE = "שדה חובה";
const REGEX_ONLY_LETTERS = /^[\u0590-\u05FFa-zA-Z\s]+$/;
const REGEX_ONLY_NUMBERS = /^\d+$/;
const CONTACT_INFO_ITEMS_LIST = [
  {
    icon: <MdLocationOn className="contact-info-item-icon" />,
    header: ":כתובת",
    pargraph: "ישראל, תל אביב הנוטר 4",
  },
  {
    icon: <MdOutlinePhoneIphone className="contact-info-item-icon" />,
    header: ":טלפון",
    pargraph: "054-638-1184",
  },
  {
    icon: <AiOutlineMail className="contact-info-item-icon" />,
    header: ":אימייל",
    pargraph: "ShaharTherapist@gmail.com",
  },
  {
    icon: <GiEarthAmerica className="contact-info-item-icon" />,
    header: ":אתר",
    pargraph: "shahar.vercel.com",
  },
];

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .matches(REGEX_ONLY_LETTERS, NAME_CHAR_KIND_MESSAGE)
        .min(4, NAME_MINLENGTH_MESSAGE)
        .max(20, NAME_MAXLENGTH_MESSAGE)
        .required(REQUIRED_FIELD_MESSAGE),
      phoneNumber: yup
        .string()
        .matches(REGEX_ONLY_NUMBERS, PHONE_CHAR_KIND_MESSAGE)
        .length(10, PHONE_LENGTH_MESSAGE)
        .required(REQUIRED_FIELD_MESSAGE),
      message: yup
        .string()
        .max(100, MESSAGE_MAX_LENGTH_MESSAGE)
        .min(15, MESSAGE_MIN_LENGTH_MESSAGE)
        .required(REQUIRED_FIELD_MESSAGE),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const inputErrorMessage = (type) => {
    return formik.touched[type] && formik.errors[type] ? (
      <div className="input-error">
        <MdReportGmailerrorred />
        <p>{formik.errors[type]}</p>
      </div>
    ) : null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (formik.isValid && formik.dirty) {
      emailjs
        .sendForm(API_SERVICE_ID, API_TAMPLATE_ID, e.target, API_KEY_PUBLIC)
        .then(
          (result) => {
            toast.success(MAIL_SUCSESS_MESSAGE);
            console.log(result.text);
          },
          (error) => {
            toast.error(MAIL_FAILED_MESSAGE);
            console.log(error.text);
          }
        );
    }
    formik.handleSubmit();
  };
  const contactInfoItemsDisplay = () => {
    const contactInfoItems = CONTACT_INFO_ITEMS_LIST.map(
      ({ icon, header, pargraph }) => {
        return (
          <span className="contact-info-item">
            <div className="contact-info-item-text">
              <h3>{header}</h3>
              <p>{pargraph}</p>
            </div>
            <span className="contact-info-item-icon-box">{icon}</span>
          </span>
        );
      }
    );
    return contactInfoItems;
  };

  return (
    <div className="contact-cover">
      <h1>ליצירת קשר וקביעת פגישה</h1>
      <div className="contact-boxes-container">
        <form
          autoComplete="off"
          className="contact-form"
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <div className="contact-input-container">
            <h6>שם מלא</h6>
            <div
              className={`constact-icon-and-input ${
                formik.touched.fullName &&
                formik.errors.fullName &&
                "contact-error"
              }`}
            >
              <BsPerson />
              <input
                className={`contact-name`}
                type="text"
                id={NAME_FIELD}
                name={NAME_FIELD}
                placeholder=""
                dir="rtl"
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
            </div>
            {inputErrorMessage(NAME_FIELD)}
          </div>
          <div className="contact-input-container">
            <h6>מספר טלפון</h6>
            <div
              className={`constact-icon-and-input ${
                formik.touched.phoneNumber &&
                formik.errors.phoneNumber &&
                "contact-error"
              }`}
            >
              <MdOutlinePhoneIphone />
              <input
                className={`contact-phone`}
                type="tel"
                id={PHONE_FIELD}
                name={PHONE_FIELD}
                placeholder=""
                dir="rtl"
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {inputErrorMessage(PHONE_FIELD)}
          </div>

          <div className="contact-text-container">
            <h6>הודעה</h6>
            <textarea
              className={`contact-message ${
                formik.touched.message &&
                formik.errors.message &&
                "contact-error"
              }`}
              id={MESSAGE}
              name={MESSAGE}
              placeholder={MESSAGE_PLACEHOLDER}
              dir="rtl"
              onBlur={formik.handleBlur}
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {inputErrorMessage(MESSAGE)}
          </div>
          <button className="contact-submit" type="submit">
            שליחה
          </button>
        </form>

        <div className="contact-info-container">
          <h1>פרטי התקשרות</h1>
          <span className="contact-info-items-list">
            {contactInfoItemsDisplay()}
          </span>
        </div>
      </div>
    </div>
  );
};
