import * as Yup from "yup";

enum MESSAGES {
  required = "Obrigatório",
  password = "A senha deve conter no mínimo 8 caractéres",
  passwordMatch = "As senhas não coincidem",
}

export const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string().required(MESSAGES.required),
  username: Yup.string().required(MESSAGES.required),
  password: Yup.string().required(MESSAGES.required).min(8, MESSAGES.password),
  confirmPassword: Yup.string()
    .required(MESSAGES.required)
    .oneOf([Yup.ref("password")], MESSAGES.passwordMatch),
});

export const LoginValidationSchema = Yup.object().shape({
  username: Yup.string().required(MESSAGES.required),
  password: Yup.string().required(MESSAGES.required).min(8, MESSAGES.password),
});
