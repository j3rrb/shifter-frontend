import { ERoutes } from "@/enums/routes.enum";
import { PageLink, Title } from "@/styles/login";
import { Button, Input, InputContainer, InputLabel } from "@/styles/shared";

export default function SignUp() {
  return (
    <div className="d-flex flex-column">
      <Title>
        Ponto <strong className="ilumeo">Ilumeo</strong>
      </Title>
      <form>
        <InputContainer className="mb-3">
          <InputLabel
            htmlFor="user-personal-name"
            className="form-control-label"
          >
            Nome pessoal
          </InputLabel>
          <Input id="user-personal-name" className="form-control" />
        </InputContainer>
        <InputContainer className="mb-3">
          <InputLabel htmlFor="username" className="form-control-label">
            Nome de usuário
          </InputLabel>
          <Input id="username" className="form-control" />
        </InputContainer>
        <InputContainer className="mb-3">
          <InputLabel htmlFor="password" className="form-control-label">
            Senha
          </InputLabel>
          <Input id="password" className="form-control" type="password" />
        </InputContainer>
        <InputContainer className="mb-3">
          <InputLabel htmlFor="confirm-password" className="form-control-label">
            Confirme a senha
          </InputLabel>
          <Input id="confirm-password" className="form-control" type="password" />
        </InputContainer>
        <div>
          <Button className="btn">Criar conta</Button>
        </div>
      </form>
      <PageLink to={ERoutes.LOGIN}>Fazer login</PageLink>
    </div>
  );
}
