import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from  'yup';

import logoimg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback (async (data: string) => {
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatorio'),
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
                password: Yup.string().min(6, 'Minimo de 6 digitos'),
            });
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

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
