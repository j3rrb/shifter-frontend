import { ERoutes } from "@/enums/routes.enum";
import { PageLink, Title } from "@/styles/login";
import { Button } from "@/styles/shared";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpValidationSchema } from "@/schemas";
import Input from "@/components/Input";
import { ICreateUserForm } from "@/interfaces/user.interface";
import { useCreateUserMutation } from "@/redux/apis";
import { message } from "antd";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [createUser, result] = useCreateUserMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ICreateUserForm>({
    mode: "onChange",
    resolver: yupResolver(SignUpValidationSchema),
  });

  const onSubmit = async (values: ICreateUserForm) => {
    await createUser(values);

    if (result.isError) {
      message.error(getErrorMessage(result.error));
    } else if (result.isSuccess) {
      message.success("Usuário criado com sucesso!");
      navigate("/login");
    }
  };

  return (
    <div className="d-flex flex-column">
      <Title>
        Ponto <strong className="ilumeo">Ilumeo</strong>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome pessoal"
          controller={control}
          name="name"
          id="name"
          error={errors.name?.message}
        />
        <Input
          label="Nome de usuário"
          controller={control}
          name="username"
          id="username"
          error={errors.username?.message}
        />
        <Input
          type="password"
          label="Senha"
          controller={control}
          name="password"
          id="password"
          error={errors.password?.message}
        />
        <Input
          type="password"
          label="Confirme a senha"
          controller={control}
          name="confirmPassword"
          id="confirmPassword"
          error={errors.confirmPassword?.message}
        />
        <div>
          <Button type="submit" className="btn">
            {result.isLoading ? "..." : "Criar conta"}
          </Button>
        </div>
      </form>
      {!result.isLoading && <PageLink to={ERoutes.LOGIN}>Fazer login</PageLink>}
    </div>
  );
}
