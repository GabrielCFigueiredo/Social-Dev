import { useForm } from "react-hook-form";
import { createSchema } from "../../../../modules/posts/posts.schema";
import { ButtonMedium } from "../../button/button.styles";
import { joiResolver } from "@hookform/resolvers/joi";
import ControlledTextArea from "../../textarea/controlledTextArea";
import axios from "axios";

export default function EditPosts({ id, text, onSave }) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: joiResolver(createSchema),
    mode: "all",
  });
  const submitSave = async (data) => {
    try {
      const edit = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
        {
          id,
          text: data.text,
        }
      );
      if (edit.status === 200) {
        onSave();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitSave)}>
      <ControlledTextArea
        placeholder="Digite sua mensagem"
        rows={4}
        control={control}
        name="text"
        defaultValue={text}
      />
      <ButtonMedium disabled={!isValid}>Salvar Alteração</ButtonMedium>
    </form>
  );
}
