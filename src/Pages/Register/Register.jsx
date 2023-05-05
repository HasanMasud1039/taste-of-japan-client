/*eslint-disable no-unused-vars*/
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
           
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className='mx-auto w-50'>
            <h3>Please Register</h3>
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
                <Form.Text className="text-secondary">Already have an account?  
                   <Link to="/login">  Login</Link>
                </Form.Text>
                <br />
            </Form>
        </Container>

   );
};

export default Register;
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";


// const Register = () => {
//   const { registerUser } = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegistration = (event) => {
//     event.preventDefault();
//     if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
//       setError("password not valid need 8 char ");
//       return;
//     }
//     if ((name, email, password)) {
//       registerUser(email, password)
//         .then((result) => {
//           console.log(result.user);
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
//   };
//   return (
//     <div>
//       <div className="container">
//         <div className="row d-flex justify-content-center align-items-center">
//           <div className="col-md-6 ">
//             <div className="border w-100 m-auto text-center p-5">
//               <p className="text-danger">{error}</p>
//               <form action="">
//                 <input
//                   onChange={(e) => setName(e.target.value)}
//                   className="email p-3 m-2"
//                   type="text"
//                   placeholder="enter your Name"
//                   required
//                 />
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="email p-3 m-2"
//                   type="email"
//                   placeholder="enter your email"
//                 />
//                 <div className="pass-container">
//                   <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="password p-3 m-2"
//                     type="text"
//                     placeholder="type your password"
//                   />
//                   {/* <input
//                     className="password p-3 m-2"
//                     type="password"
//                     placeholder="enter your password"
//                   /> */}
//                   {/* <button>toggle</button> */}
//                 </div>
//                 <button
//                   onClick={handleRegistration}
//                   className="btn btn-info w-75 p-2 mt-3"
//                 >
//                   Register
//                 </button>
//                 <p className="p-2">
//                   <small className="text-info">
//                     already have account? login here..
//                   </small>
//                 </p>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <img
//               className="w-100"
//               src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <SocialLoginBtn></SocialLoginBtn>
//       </div>
//     </div>
//   );
// };

// export default Register;