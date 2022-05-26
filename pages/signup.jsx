import Link from "next/link";
import { useState } from "react";
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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const handleForm = (e) => {
e.preventDefault()
}

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H3>Tudo que acontece no mundo dev, está aqui!</H3>
      <FormContainer>
        <H2>Crie sua Conta</H2>
      </FormContainer>
      <Form onSubmit={handleForm}>
        <Input
          Label={"nome"}
          type={"text"}
          onChange={({ target }) => {
            setFirstName(target.value);
          }}
        />
        <Input
          Label={"sobrenome"}
          type={"text"}
          onChange={({ target }) => {
            setLastName(target.value);
          }}
        />
        <Input
          Label={"usuario"}
          type={"text"}
          onChange={({ target }) => {
            setUser(target.value);
          }}
        />
        <Input
          Label={"email"}
          type={"email"}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
        <Input
          Label={"senha"}
          type={"password"}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <Button>Cadastrar</Button>
      </Form>
      <Register>
        Já possui uma conta? <Link href="/login">Faça seu Login</Link>
      </Register>
    </ImageWithSpace>
  );
}
