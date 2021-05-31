import React from 'react';
import { FiArrowLeft ,FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoimg} alt="GoBarber" />
            <form>
                <h1>Face seu cadastro</h1>

                <Input name="email" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                <Button type="submit"> Entrar</Button>

            </form>

            <a href="Login">
                <FiArrowLeft />
                Voltar para logon</a>
        </Content>


    </Container>
);

export default SignUp;
