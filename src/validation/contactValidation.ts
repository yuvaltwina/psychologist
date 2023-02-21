import * as yup from "yup";
const NAME_CHAR_KIND_MESSAGE = "שדה זה מכיל רק אותיות";
const NAME_MINLENGTH_MESSAGE = "שדה זה צריך להכיל לפחות 4 תווים";
const NAME_MAXLENGTH_MESSAGE = "שדה זה לא ארוך מ20 תווים";
const PHONE_LENGTH_MESSAGE = "שדה זה צריך להיות באורך 10 תווים";
const PHONE_CHAR_KIND_MESSAGE = "שדה זה מכיל רק ספרות";
const SUBJECT_MAXLENGTH_MESSAGE = "שדה זה לא ארוך מ50 תווים";
const MESSAGE_MIN_LENGTH_MESSAGE = "שדה זה צריך להכיל לפחות 15 תווים";
const MESSAGE_MAX_LENGTH_MESSAGE = "שדה זה לא ארוך מ500 תווים";
const REQUIRED_FIELD_MESSAGE = "שדה חובה";
const REGEX_ONLY_LETTERS = /^[\u0590-\u05FFa-zA-Z\s]+$/;
const REGEX_ONLY_NUMBERS = /^\d+$/;

export const contactValidation = yup.object({
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
  subject: yup
    .string()
    .matches(REGEX_ONLY_LETTERS, NAME_CHAR_KIND_MESSAGE)
    .min(4, NAME_MINLENGTH_MESSAGE)
    .max(50, SUBJECT_MAXLENGTH_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  message: yup
    .string()
    .max(500, MESSAGE_MAX_LENGTH_MESSAGE)
    .min(15, MESSAGE_MIN_LENGTH_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
});
