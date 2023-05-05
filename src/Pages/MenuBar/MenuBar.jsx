/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
                    <li>Home</li>
                </Link>
                <Link to="/services">
                    <li>Services</li>
                </Link>

                {user?.email ? (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                ) : (
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                )}
                {/* <li>{user?.email}</li> */}
                <Link to="/register">
                    <li>Registration</li>
                </Link>

            </div>
        </div>
    );
};

export default Menubar;