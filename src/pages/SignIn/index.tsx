import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoimg} alt="GoBarber" />
            <form>
                <h1>Face seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                <Button type="submit"> Entrar</Button>

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
