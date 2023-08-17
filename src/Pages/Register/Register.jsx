/*eslint-disable no-unused-vars*/
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    const { registerUser , updateUserProfile} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    useTitle('Register');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        // console.log(email, password);
        registerUser(email, password)
        .then(result => {
                updateUserProfile(displayName, photoURL)
                const createdUser = result.user;
                console.log(createdUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
            
    }
    console.log(registerUser);
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div className='text-white mx-auto w-75 pb-4'>
            <h3 className='d-flex justify-content-center my-4'>Please Register</h3>
            <Container>

                <Form onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" name="name" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control required type="text" name="photo" placeholder="Your Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'> terms and conditions.</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary fs-6 mt-4">Already have an account?
                        <Link className="text-decoration-none" to="/login">  Login</Link>
                    </Form.Text>
                    <br />
                </Form>
            </Container>
        </div>


    );
};

export default Register;