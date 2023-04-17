import { LoginValidationSchema } from "@/schemas";
import { PageLink, Title } from "../../styles/login";
import { ERoutes } from "@/enums/routes.enum";
import { Button } from "@/styles/shared";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import { ILoginForm } from "@/interfaces/user.interface";
import { useLoginMutation } from "@/redux/apis";
import { message } from "antd";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/user.slice";
import { RootState } from "@/redux/store";

export default function Login() {
  const [login, result] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(LoginValidationSchema),
  });

  const onSubmit = async (values: ILoginForm) => {
    await login(values);

    if (result.isError) {
      message.error(getErrorMessage(result.error));
    } else if (result.isSuccess) {
      dispatch(setUser(result.data));
      navigate("/");
    }
  };

  return (
    <div className="d-flex flex-column">
      <Title>
        Ponto <strong className="ilumeo">Ilumeo</strong>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="username"
          id="username"
          controller={control}
          label="Nome de usuário"
          error={errors.username?.message}
        />
        <Input
          name="password"
          id="password"
          controller={control}
          label="Senha"
          type="password"
          error={errors.password?.message}
        />
        <div>
          <Button type="submit" className="btn">
            {result.isLoading ? "..." : "Entrar"}
          </Button>
        </div>
      </form>
      <PageLink to={ERoutes.SIGN_UP}>Criar conta</PageLink>
    </div>
  );
}
