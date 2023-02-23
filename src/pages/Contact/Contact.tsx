import React, { FC, useState } from "react";
import "./Style/Contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { MdReportGmailerrorred } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Textarea from "@mui/joy/Textarea";
import { contactValidation } from "../../validation/contactValidation";
const API_KEY_PUBLIC = import.meta.env.VITE_API_KEY_PUBLIC;
const API_TAMPLATE_ID = import.meta.env.VITE_API_TAMPLATE_ID;
const API_SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;
const NAME_FIELD = "fullName";
const PHONE_FIELD = "phoneNumber";
const SUBJECT_FIELD = "subject";
const MESSAGE = "message";
const MAIL_SUCSESS_MESSAGE = "! המייל נשלח בהצלחה";
const MAIL_FAILED_MESSAGE = "שליחה נכשלה";
const MESSAGE_PLACEHOLDER = "כאן ניתן למלא את פרטי ההודעה...";
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
      subject: "",
      message: "",
    },
    validationSchema: contactValidation,
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
          <span key={header} className="contact-info-item">
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
      <div className="contact-boxes-container">
        <form
          autoComplete="off"
          className="contact-form"
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <h1>ליצירת קשר</h1>
          <div className="all-inputs-continer">
            <div className="contact-name-and-phone-inputs">
              <div className="contact-input-container">
                <TextField
                  type="text"
                  id={NAME_FIELD}
                  name={NAME_FIELD}
                  dir="rtl"
                  placeholder=" שם מלא"
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={!!(formik.touched.fullName && formik.errors.fullName)}
                  sx={{
                    width: "100%",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsPerson />
                      </InputAdornment>
                    ),
                  }}
                />
                {inputErrorMessage(NAME_FIELD)}
              </div>
              <div className="contact-input-container">
                <TextField
                  type="tel"
                  id={PHONE_FIELD}
                  name={PHONE_FIELD}
                  dir="rtl"
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  placeholder="מספר טלפון"
                  error={
                    !!(formik.touched.phoneNumber && formik.errors.phoneNumber)
                  }
                  sx={{
                    width: "100%",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdOutlinePhoneIphone />
                      </InputAdornment>
                    ),
                  }}
                />
                {inputErrorMessage(PHONE_FIELD)}
              </div>
            </div>
            <div className="contact-input-container">
              <TextField
                type="text"
                id={SUBJECT_FIELD}
                name={SUBJECT_FIELD}
                dir="rtl"
                placeholder="נושא"
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={!!(formik.touched.subject && formik.errors.subject)}
                className={"subject-input"}
                sx={{
                  width: "100%",
                }}
              />
              {inputErrorMessage(SUBJECT_FIELD)}
            </div>
            <div id="my-form" className="contact-text-container">
              <Textarea
                variant="outlined"
                className={`contact-text-input ${
                  !!(formik.touched.message && formik.errors.message)
                    ? "text-input-error"
                    : ""
                }`}
                id={MESSAGE}
                name={MESSAGE}
                dir="rtl"
                minRows={5}
                maxRows={20}
                placeholder={MESSAGE_PLACEHOLDER}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={!!(formik.touched.message && formik.errors.message)}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "100%",
                  },
                }}
              />
              {inputErrorMessage(MESSAGE)}
            </div>
            <button
              className="contact-submit"
              type="submit"
              disabled={formik.isSubmitting}
            >
              שליחת הודעה
            </button>
          </div>
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
