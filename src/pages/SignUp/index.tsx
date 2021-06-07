import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoimg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    function handleSubmit(data: string): void {
        console.log(data);
    }

    return (
        <Container>
        <Background />
        <Content>
            <img src={logoimg} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
                <h1>Face seu cadastro</h1>

                <Input name="email" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                <Button type="submit"> Entrar</Button>

            </Form>

            <a href="Login">
                <FiArrowLeft />
                Voltar para logon</a>
        </Content>


    </Container>
    );
};

export default SignUp;
