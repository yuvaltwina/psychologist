import React, { FC, useState } from "react";
import "./Style/Contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useFormik } from "formik";
import { MdReportGmailerrorred } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
// const API_KEY_PRIVATE = import.meta.env.VITE_API_KEY_PRIVATE;
const API_KEY_PUBLIC = import.meta.env.VITE_API_KEY_PUBLIC;
const API_TAMPLATE_ID = import.meta.env.VITE_API_TAMPLATE_ID;
const API_SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;

const NAMEFIELD = "fullName";
const PHONEFIELD = "phoneNumber";
const MESSAGE = "message";
const MAILSUCSESSMESSAGE = "! המייל נשלח בהצלחה";
const MAILFAILEDMESSAGE = "שליחה נכשלה";
const MESSAGEPLACEHOLDER = "כאן ניתן למלא את פרטי ההודעה...";

const REGEXONLYLETTERS = /^[\u0590-\u05FFa-zA-Z\s]+$/;
const REGEXONLYNUMBERS = /^\d+$/;

const fieldValidationMessage = (type) => {
  let validationMessage = {
    required: "שדה חובה",
    minLength: "",
    maxLength: "",
    charsVarify: "",
  };
  if (type === NAMEFIELD) {
    return (validationMessage = {
      ...validationMessage,
      minLength: "שדה זה צריך להכיל לפחות 4 תווים",
      maxLength: "שדה זה לא ארוך מ20 תווים",
      charsVarify: "שדה זה מכיל רק אותיות",
    });
  }
  if (type === PHONEFIELD) {
    return (validationMessage = {
      ...validationMessage,
      minLength: "שדה זה צריך להכיל לפחות 4 תווים",
      maxLength: "שדה זה לא ארוך מ20 תווים",
      charsVarify: "שדה זה מכיל רק ספרות",
    });
  }
  if (type === MESSAGE) {
    return (validationMessage = {
      ...validationMessage,
      minLength: "שדה זה צריך להכיל לפחות 15 תווים",
      maxLength: "שדה זה לא ארוך מ100 תווים",
      charsVarify: "",
    });
  }
};

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
        .matches(REGEXONLYLETTERS, "שדה זה מכיל רק אותיות")
        .min(4, "שדה זה צריך להכיל לפחות 4 תווים")
        .max(20, "שדה זה לא ארוך מ20 תווים")
        .required("שדה חובה"),
      phoneNumber: yup
        .string()
        .matches(REGEXONLYNUMBERS, "שדה זה מכיל רק ספרות")
        .length(10, "שדה זה צריך להיות באורך 10 תווים")
        .required("שדה חובה"),
      message: yup
        .string()
        .max(100, "שדה זה לא ארוך מ100 תווים")
        .min(15, "שדה זה צריך להכיל לפחות 15 תווים")
        .required("שדה חובה"),
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
            toast.success(MAILSUCSESSMESSAGE);
            console.log(result.text);
          },
          (error) => {
            toast.error(MAILFAILEDMESSAGE);
            console.log(error.text);
          }
        );
    }
    formik.handleSubmit();
  };

  return (
    <div className="contact-cover">
      <h1>ליצירת קשר וקביעת פגישה</h1>
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
              id={NAMEFIELD}
              name={NAMEFIELD}
              placeholder=""
              dir="rtl"
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>
          {inputErrorMessage(NAMEFIELD)}
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
              id={PHONEFIELD}
              name={PHONEFIELD}
              placeholder=""
              dir="rtl"
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
          {inputErrorMessage(PHONEFIELD)}
        </div>
        <div className="contact-text-container">
          <h6>הודעה</h6>
          <textarea
            className={`contact-message ${
              formik.touched.message && formik.errors.message && "contact-error"
            }`}
            id={MESSAGE}
            name={MESSAGE}
            placeholder={MESSAGEPLACEHOLDER}
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
    </div>
  );
};
