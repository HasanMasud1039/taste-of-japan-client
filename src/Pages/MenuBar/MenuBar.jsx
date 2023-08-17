/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Dropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.displayName);
    const handleLogout = () => {

        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    const nameValue = user?.displayName;
    const photoValue = user?.photoURL;
    return (
        <div className="Menubar-container fixed">
            <h1 className="menu_title">Taste of <span className="japan">JAPAN</span></h1>

    <div className="dropdown">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaBars></FaBars>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/blog">Blog</Dropdown.Item>
        {
            user? (
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            ) :
            <Dropdown.Item href="/login">Login</Dropdown.Item>
        }
      </Dropdown.Menu>
    </Dropdown>
    </div>
            <div className="menu-container">
                <Link to="/">
                    <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2">Home</Button>
                </Link>
                <Link to="/blog">
                    <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2">Blog</Button>
                </Link>

                {user? (
                    // <li>{nameValue}</li>,
                    <li className="d-flex text-white">
                        <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2" onClick={handleLogout} style={{height:'41px'}} >Logout</Button>
                        
                                    <li className="d-flex fw-bold">
                                        <p className="p-2 text-white fs-6">{user.displayName}</p>
                                        <img className="border-4 rounded-circle" style={{width:'60px'}} src={photoValue} alt="" />
                                    </li>
                              
                        
                        {/* <button onClick={handleLogout}>Logout</button> */}

                    </li>
                ) : (
                    <Link to="/login">
                        <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2">Login</Button>
                    </Link>
                )}
                {/* <li>{user?.email}</li> */}
                {/* <Link to="/register">
                <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2">Registration</Button>
                </Link> */}

            </div>
        </div>
    );
};

export default Menubar;