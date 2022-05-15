import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import { Form, FormContainer, Register } from "../src/components/layout/ImageWithSpace.styles";
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
                <label>Email</label>
                <input placeholder="Digite seu email" type="email"/>
                <label>Senha</label>
                <input placeholder="Digite sua senha" type="password"/>
                <button>Entrar</button>
            </Form>
            <Register>Não possui uma conta? <a href="#">Faça seu Cadastro</a></Register>
        </ImageWithSpace>
    )
}