import { object, string, number, date, InferType } from "yup";
const messages = {
  required: "Bu alan zorunludur",
  email: "Geçerli bir E-mail giriniz  ",
  min: "en az 8 karakter giriniz",
  pass: "Şifre en az 1 büyük harf 1 rakam , 1 özel işaret ve uzunluğu en 6 karakter olmalıdır",
};

let validation = object({
  fullName: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string()
    .min(8, messages.min)
    .required(messages.required)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      messages.pass
    ),
});
export default validation;
