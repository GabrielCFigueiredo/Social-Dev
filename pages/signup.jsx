import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../src/components/button/button.styles";
import Input from "../src/components/input/input";
import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../src/components/layout/ImageWithSpace.styles";
import { H1, H2, H3 } from "../src/components/typography/Typography.styles";
import { joiResolver } from "@hookform/resolvers/joi";
import { signupSchema } from "../modules/user/user.schema";


export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signupSchema),
  });
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H3>Tudo que acontece no mundo dev, está aqui!</H3>
      <FormContainer>
        <H2>Crie sua Conta</H2>
      </FormContainer>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input
          Label={"nome"}
          type={"text"}
          {...register("firstName")}
          error={errors.firstName}
        />
        <Input
          Label={"sobrenome"}
          type={"text"}
          {...register("lastName")}
          error={errors.lastName}
        />
        <Input
          Label={"usuario"}
          type={"text"}
          {...register("user")}
          error={errors.user}
        />
        <Input
          Label={"email"}
          type={"email"}
          {...register("email")}
          error={errors.email}
        />
        <Input
          Label={"senha"}
          type={"password"}
          {...register("password")}
          error={errors.password}
        />
        <Button type="submit" disabled={Object.keys(errors).length > 0} >Cadastrar</Button>
      </Form>
      <Register>
        Já possui uma conta? <Link href="/login">Faça seu Login</Link>
      </Register>
    </ImageWithSpace>
  );
}
