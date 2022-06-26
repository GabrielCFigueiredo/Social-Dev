import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../modules/user/user.schema";
import Button from "../src/components/button/button";

import Input from "../src/components/input/input";
import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../src/components/layout/ImageWithSpace.styles";
import { H1, H2, H3 } from "../src/components/typography/Typography.styles";

export default function Login() {
  const [publish, setPublish] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setPublish(true);
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        data
      );
      if (status === 200) {
        router.push("/");
      }
    } catch (error) {
      if (error.response.data === "password incorrect") {
        setError("password", { type: "password incorrect" });
      } else {
        if (error.response.data === "user ou email not found") {
          setError("userOrEmail", { type: "userOrEmail" });
        }
      }
    } finally {
      setPublish(false);
    }
  };

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H3>Tudo que acontece no mundo dev, está aqui!</H3>
      <FormContainer>
        <H2>Entre em sua Conta</H2>
      </FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          Label={"email ou usuario"}
          name={"userOrEmail"}
          {...register("userOrEmail")}
          error={errors.userOrEmail}
          type={"text"}
        />
        <Input
          Label={"senha"}
          name={"password"}
          {...register("password")}
          error={errors.password}
          type={"password"}
        />
        <Button
          loading={publish}
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Entrar
        </Button>
      </Form>
      <Register>
        Não possui uma conta? <Link href="/signup">Faça seu Cadastro</Link>
      </Register>
    </ImageWithSpace>
  );
}
