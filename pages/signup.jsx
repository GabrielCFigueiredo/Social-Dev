import Link from "next/link";
import { useForm } from "react-hook-form";

import Input from "../src/components/input/input";
import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../src/components/layout/ImageWithSpace.styles";
import { H1, H2, H3 } from "../src/components/typography/Typography.styles";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";
import { signupSchema } from "../modules/user/user.schema";
import Button from "../src/components/button/button";

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(signupSchema),
  });

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
        data
      );
      if (status === 201) {
        router.push("/");
      }
    } catch (error) {
      if (error.response.data.code === 11000)
        setError(error.response.data.duplicatedKey, {
          type: "duplicated",
        });
    }
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
          name={"firstName"}
          {...register("firstName")}
          error={errors.firstName}
        />
        <Input
          Label={"sobrenome"}
          type={"text"}
          name={"lastName"}
          {...register("lastName")}
          error={errors.lastName}
        />
        <Input
          Label={"usuario"}
          type={"text"}
          name={"user"}
          {...register("user")}
          error={errors.user}
        />
        <Input
          Label={"email"}
          type={"email"}
          name={"email"}
          {...register("email")}
          error={errors.email}
        />
        <Input
          Label={"senha"}
          type={"password"}
          name={"password"}
          {...register("password")}
          error={errors.password}
        />
        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Cadastrar
        </Button>
      </Form>
      <Register>
        Já possui uma conta? <Link href="/login">Faça seu Login</Link>
      </Register>
    </ImageWithSpace>
  );
}
