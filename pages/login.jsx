import { Button } from "../src/components/button/button.styles";
import Input from "../src/components/input/input";
import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../src/components/layout/ImageWithSpace.styles";
import { H1, H2, H4 } from "../src/components/typography/Typography.styles";

export default function Login() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Entre em sua Conta</H2>
      </FormContainer>
      <Form>
        <Input Label={"email"} type={"email"} />
        <Input Label={"senha"} type={"password"} />
        <Button>Entrar</Button>
      </Form>
      <Register>
        Não possui uma conta? <a href="#">Faça seu Cadastro</a>
      </Register>
    </ImageWithSpace>
  );
}
