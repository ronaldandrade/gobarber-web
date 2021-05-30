import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoimg} alt="GoBarber" />
            <form>
                <h1>Face seu logon</h1>

                <input placeholder="E-mail" />
                <input type="password" placeholder="senha" />

                <button type="submit"> Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="Login">
                <FiLogIn />
                Criar conta</a>
        </Content>
            <Background />

    </Container>
);

export default SignIn;
