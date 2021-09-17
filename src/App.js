import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CardUser from "./components/cardUser";
import { useState } from "react";

function App() {
  const [card, setCard] = useState("");

  const formSchema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches("^[A-Za-zÀ-ü ]{0,18}$", "Nome deve ter no maximo 18 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    emailConfirmed: yup
      .string()
      .required("Email inválido")
      .oneOf([yup.ref("email"), null], "Emails diferentes"),
    cellphone: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    // .matches(
    //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    //   "essa senha não é segura")
    passwordConfirmed: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "senhas diferentes"),
    // .matches(
    //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    //   "essa senha não é segura"
    // ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setCard(data);
  };

  console.log(errors);
  return (
    <div className="container">
      <h1>sign up</h1>
      <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome de usuário*" {...register("user")} />
        {errors.user && errors.user.message}
        <input placeholder="Nome completo*" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Endereço de email*" {...register("email")} />
        {errors.email && errors.email.message}
        <input
          placeholder="Confirme seu email*"
          {...register("emailConfirmed")}
        />
        {errors.emailConfirmed?.message}
        <input
          placeholder="Contato:(81)99999-9999*"
          {...register("cellphone")}
        />
        {errors.cellphone?.message}

        <input
          type="password"
          className="senha"
          placeholder="Senha*"
          {...register("password")}
        />
        {errors.password?.message}
        <input
          type="password"
          id="input1"
          placeholder="Confirme sua senha*"
          {...register("passwordConfirmed")}
        />
        {errors.passwordConfirmed?.message}

        <button>Enviar</button>
      </form>
      {card && <CardUser card={card} />}
    </div>
  );
}

export default App;
