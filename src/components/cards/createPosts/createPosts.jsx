import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createSchema } from "../../../../modules/posts/posts.schema";
import {
  ButtonText,
  ContainerButton,
  TextContainer,
  Title,
  WrapperCreatePost,
} from "./createPosts.styles";
import ControlledTextArea from "../../textarea/controlledTextArea";
import axios from "axios";
import { useSWRConfig } from "swr";
import Button from "../../button/button";
import { useState } from "react";

export default function CreatePosts({ userName }) {
  const [publish, setPublish] = useState(false);
  const { mutate } = useSWRConfig();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    resolver: joiResolver(createSchema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    try {
      setPublish(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
        data
      );
      if (response.status === 201) {
        reset();
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setPublish(false);
    }
  };
  return (
    <WrapperCreatePost>
      <Title>No que você está pensando,?{userName}</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextContainer>
          <ControlledTextArea
            placeholder="Digite sua mensagem"
            rows={4}
            control={control}
            name="text"
          />
        </TextContainer>
        <ContainerButton>
          <ButtonText>A sua mensagem será publica.</ButtonText>
          <Button loading={publish} disabled={!isValid}>
            Postar Mensagem
          </Button>
        </ContainerButton>
      </form>
    </WrapperCreatePost>
  );
}
