import Link from "next/link";
import { Button } from "../src/components/button/button.styles";
import Input from "../src/components/input/input";
import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../src/components/layout/ImageWithSpace.styles";
import { H1, H2, H3 } from "../src/components/typography/Typography.styles";

export default function Signup() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H3>Tudo que acontece no mundo dev, está aqui!</H3>
      <FormContainer>
        <H2>Crie sua Conta</H2>
      </FormContainer>
      <Form>
        <Input Label={"nome"} type={"text"} />
        <Input Label={"sobrenome"} type={"text"} />
        <Input Label={"usuario"} type={"text"} />
        <Input Label={"email"} type={"email"} />
        <Input Label={"senha"} type={"password"} />
        <Button>Entrar</Button>
      </Form>
      <Register>
        Já possui uma conta? <Link href="/login">Faça seu Login</Link>
      </Register>
    </ImageWithSpace>
  );
}
