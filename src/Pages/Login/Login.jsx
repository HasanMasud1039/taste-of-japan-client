/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error ', error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
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

            <div>
                <div className="">
                    <img
                        onClick={handleGoogleSignIn}
                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
                <div className="">
                    <img onClick={handleGithubSignIn}
                        className=" social-button"
                        src="https://i.ibb.co/g9f4P0S/github-btn.png"
                        alt=""
                    />
                </div>
                { user && <div>
                <h3>User: {user.displayName}</h3>
                <h5>Email: {user.email}</h5>
                <img src={user.photoURL} alt="" />
            </div>}
            </div>

        </Container>
    );
};

export default Login;

