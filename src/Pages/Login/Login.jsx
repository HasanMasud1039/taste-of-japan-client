/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <Container className='mx-auto my-4 w-50'>
            <h3>Please Login</h3>

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className=" mt-4 text-secondary">Dont have an account?
                    <Link to="/register">  Register</Link>
                </Form.Text>

            </Form>

            <SocialLoginBtn></SocialLoginBtn>

        </Container>
    );
};

export default Login;

