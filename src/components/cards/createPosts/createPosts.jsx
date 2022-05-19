
import { ButtonMedium } from "../../button/button.styles";
import Textarea from "../../textarea/textarea.styles";
import { ButtonText, ContainerButton, TextContainer, Title, WrapperCreatePost } from "./createPosts.styles";



export default function CreatePosts() {
    return (
        <WrapperCreatePost>
            <Title>No que você está pensando, @nick?</Title>
            <TextContainer>
                <Textarea placeholder="Digite sua mensagem" rows={4} />
            </TextContainer>
            <ContainerButton>
                <ButtonText>A sua mensagem será publica.</ButtonText>
                <ButtonMedium>Enviar Mensagem</ButtonMedium>
            </ContainerButton>
        </WrapperCreatePost>
    )
}