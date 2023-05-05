/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button } from "react-bootstrap";

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.email);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="Menubar-container">
            <h1 className="menu_title">Taste of <span className="japan">JAPAN</span></h1>
            <div className="menu-container">
                <Link to="/">
                <Button className="btn mx-2">Home</Button>
                </Link>
                <Link to="/blog">
                <Button className="btn mx-2">Blog</Button>
                </Link>

                {user?.email ? (
                    <li>
                        {/* <button onClick={handleLogout}>Logout</button> */}
                        <Button className="btn mx-2"  onClick={handleLogout} >Logout</Button>
                    </li>
                ) : (
                    <Link to="/login">
                        <Button className="btn mx-2" >Login</Button>
                    </Link>
                )}
                {/* <li>{user?.email}</li> */}
                <Link to="/register">
                <Button className="btn mx-2">Registration</Button>
                </Link>

            </div>
        </div>
    );
};

export default Menubar;