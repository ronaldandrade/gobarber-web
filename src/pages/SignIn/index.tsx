import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoimg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface ISignInFormData {
    email: string;
    password: string;
  }

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn }  = useAuth();

    const handleSubmit = useCallback(async (data: ISignInFormData ) => {
        try{
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail valido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            signIn({
                email: data.email,
                password: data.password,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }


        }
    }, [signIn]);


return(
    <Container>
        <Content>
            <img src={logoimg} alt="GoBarber" />
            <Form ref={formRef} onSubmit={ handleSubmit }>
                <h1>Face seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="senha" />

                <Button type="submit"> Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </Form>

            <a href="Login">
                <FiLogIn />
                Criar conta</a>
        </Content>
            <Background />

    </Container>
    );
}

export default SignIn;
