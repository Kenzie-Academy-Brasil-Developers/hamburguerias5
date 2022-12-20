import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import Group from "../assets/img/branding.svg";
import { UserContext } from "../context/ContextShiru";
import {
  AllInput,
  BtnRegister,
  DivRegister,
  FormularioRegister,
  LabelEmail,
  LabelName,
  NavLink,
  SectionRegisterForm,
  SpanRegister,
  TitleRegister,
} from "./FormRegisterStyle";

export interface Idata {
  name: string;
  email: string;
  password: string;
}
interface Ierror {
  error: string;
}
function FormRegi() {
  interface Iuser {
    name: string;
    email: string;
    password: string;
  }
  const { submitFormRegister } = useContext(UserContext);
  const [user, setUser] = useState<Iuser>();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("digite sua senha com 8 digitos e um caractere especial "),
    confirmPassword: yup
      .string()
      .required("os campos de senha deve ser iguais")
      .oneOf([yup.ref("password"), "Os campos nao correspondem", null]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);

  const SubmitForm = (FormData: any) => {
    setUser(FormData);
    submitFormRegister(FormData);
  };
  return (
    <DivRegister>
      <img src={Group} alt="" />
      <SectionRegisterForm>
        <SpanRegister>
          <TitleRegister> Cadastro</TitleRegister>
          <NavLink to="/login">Retornar para o login</NavLink>
        </SpanRegister>
        <FormularioRegister onSubmit={handleSubmit(SubmitForm)}>
          <LabelName htmlFor="name">Nome</LabelName>
          <AllInput
            type="text"
            placeholder="digite seu nome"
            {...register("name")}
          />
          <LabelEmail htmlFor="email">Email</LabelEmail>
          <AllInput type="text" placeholder="Email" {...register("email")} />

          <AllInput
            type="password"
            placeholder="digite sua senha..."
            {...register("password")}
          />

          <AllInput
            placeholder="Confirme Sua senha..."
            type="password"
            {...register("confirmPassword")}
          />
          <BtnRegister onSubmit={handleSubmit(SubmitForm)}>
            Cadastrar
          </BtnRegister>
        </FormularioRegister>
      </SectionRegisterForm>
    </DivRegister>
  );
}

export default FormRegi;
