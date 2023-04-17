import { PageLink, Title } from "../../styles/login";
import { ERoutes } from "@/enums/routes.enum";
import { Button, Input, InputContainer, InputLabel } from "@/styles/shared";

export default function Login() {
  return (
    <div className="d-flex flex-column">
      <Title>
        Ponto <strong className="ilumeo">Ilumeo</strong>
      </Title>
      <form>
        <InputContainer className="mb-3">
          <InputLabel htmlFor="username" className="form-control-label">
            Nome do usuário
          </InputLabel>
          <Input id="username" className="form-control" />
        </InputContainer>
        <InputContainer className="mb-3">
          <InputLabel htmlFor="user-password" className="form-control-label">
            Senha
          </InputLabel>
          <Input id="user-password" type="password" className="form-control" />
        </InputContainer>
        <div>
          <Button className="btn">Entrar</Button>
        </div>
      </form>
      <PageLink to={ERoutes.SIGN_UP}>Criar conta</PageLink>
    </div>
  );
}
