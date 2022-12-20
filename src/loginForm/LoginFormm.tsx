import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Group from "../assets/img/branding.svg";
import { UserContext } from "../context/ContextShiru";
import {
  AllInput,
  BtnLogin,
  BtnRegister,
  DivLogin,
  FormularioLogin,
  LabelEmail,
  LabelPassword,
  SectionLogin,
  TextFooter,
  TitleForm,
} from "./LoginStyle";
interface iLoginFormValues {
  email: string;
  password: string;
}
const FormLogin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("verifique sua senha"),
  });
  const navigate = useNavigate();
  function Register() {
    return navigate("/cadastro");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(formSchema),
  });
  const { submitFormLogin } = useContext(UserContext);
  const submit: SubmitHandler<iLoginFormValues> = async (data) => {
    await submitFormLogin(data);
  };
  return (
    <DivLogin>
      <SectionLogin>
        <TitleForm> Login</TitleForm>

        <FormularioLogin onSubmit={handleSubmit(submit)}>
          <LabelEmail htmlFor="email">Email</LabelEmail>
          <AllInput type="text" placeholder="Email" {...register("email")} />
          {/* {errors.email && errors.'email'.message{"}"} */}
          <LabelPassword htmlFor="password">Senha</LabelPassword>
          <AllInput
            type="password"
            placeholder="digite sua senha..."
            {...register("password")}
          />
          {/* <p className="error"> {errors.name && errors.password.message}</p> */}

          <BtnLogin type="submit">Logar</BtnLogin>
          <TextFooter>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </TextFooter>
          <BtnRegister onClick={() => Register()}>Cadastrar</BtnRegister>
        </FormularioLogin>
      </SectionLogin>
      <span>
        <img src={Group} alt="" />
      </span>
    </DivLogin>
  );
};
export default FormLogin;
