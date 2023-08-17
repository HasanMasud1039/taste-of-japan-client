/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import useTitle from "../../Hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user, setUser] = useState('');
    // console.log(user);
    const displayName = user.displayName;
    const userPhoto = user.photoURL;


    displayName ?

        localStorage.setItem('userName', JSON.stringify(user.displayName))

        : <></>;
    userPhoto ?

        localStorage.setItem('userPhoto', JSON.stringify(user.photoURL))

        : <></>;



    // localStorage.setItem('photo', user.photoURL);
    useTitle('Login');
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { loginUser } = useContext(AuthContext);
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/services';
    // console.log(registerUser);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                // localStorage.setItem('userName', result.user)
                // console.log(result.user);
                toast("Successfully Login");
            })
            .catch(error => {
                console.log(error);
                toast("User Not Found");
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
                console.log('error ', error.message);
                toast("Login Failed");
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
                toast("Login Failed");
            })
    }

    return (
        <div>
                    <h3 className="title">Please Login</h3>
            <Container className='container text-white mx-auto my-4 w-50'>
                <div className="body">

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" name="password" placeholder="Password" />
                        </Form.Group>

                        <Button className='bg-danger mt-4 border-0 fw-bold fs-5  bg-gradient' type="submit">Login</Button>
                        <br /><br />
                        <Form.Text className=" mt-4 fs-6 text-secondary">Dont have an account?
                            <Link className="text-decoration-none" to="/register">  Register</Link>
                        </Form.Text>

                    </Form>
                </div>

                <div className="ms-4 mt-4 pt-4 w-50 ps-4 ">
                    <div >
                        <img
                            onClick={handleGoogleSignIn}
                            className=" social-button"
                            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                            alt=""
                        />
                    </div>
                    <div className="mt-4 ">
                        <img onClick={handleGithubSignIn}
                            className="border border-1 my-2 social-button"
                            src="https://i.ibb.co/g9f4P0S/github-btn.png"
                            alt=""
                        />
                    </div>
                    {/* { user && <div>
                <h3>User: {user.displayName}</h3>
                <h5>Email: {user.email}</h5>
                <img src={user.photoURL} alt="" />
            </div>} */}
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

            </Container>
        </div>


    );
};

export default Login;

