import * as yup from "yup"


// يتم الاتفاق على الشروط بين الفرونت والباك و... الخ
export const RegisterSchema = yup.object({
  //key's name== {...register('email')}... 
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  password: yup.string().required("Password Is Required")
  .min(8,"Password must be at least 8 characters")
  .matches(/[A-Z]/,"Password must contain at least one uppercase letter")
  .matches(/[a-z]/,"Password must contain at least one lowercase letter")
  .matches(/\d/,"Password must contain at least one number")
  .matches(/[@#$&?!]/,"Password must contain at least one special character"),
  fullName:yup.string().required("Full Name Is Required"),
  userName: yup.string().matches(/^[a-zA-Z0-9._-]+$/,"Invalid UserName")
  .min(4,"username must be at least 4 characters")
  .required("UserName Is Required"),
  phoneNumber: yup.string().required("Phone Number Is Required")
});

export const LoginSchema = yup.object({
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  password: yup.string().required("Password Is Required")
  .min(8,"Password must be at least 8 characters")
  .matches(/[A-Z]/,"Password must contain at least one uppercase letter")
  .matches(/[a-z]/,"Password must contain at least one lowercase letter")
  .matches(/\d/,"Password must contain at least one number")
  .matches(/[@#$&?!]/,"Password must contain at least one special character")
});

export const SendCodeSchema = yup.object({
  email: yup.string().email("Invalid Email Format").required("Email Is Required")
});

export const ResetPasswordSchema = yup.object({
  newPassword: yup.string().required("Password Is Required")
  .min(8,"New Password must be at least 8 characters")
  .matches(/[A-Z]/,"New Password must contain at least one uppercase letter")
  .matches(/[a-z]/,"New Password must contain at least one lowercase letter")
  .matches(/\d/,"New Password must contain at least one number")
  .matches(/[@#$&?!]/,"New Password must contain at least one special character"),

  code: yup.string().required("Code is required").length(4, "Code must be 4 digits")
  .matches(/^\d+$/, "Code must contain numbers only"),

});