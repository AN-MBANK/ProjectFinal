
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid gray" }}>
            <Link to="/">MBA Gucci</Link>

            <span style={{ marginLeft: "20px" }}>
                <Link to="/cart">Cart</Link>
            </span>

            <span style={{ marginLeft: "20px" }}>
                {user ? (
                    <>
                        👤 <Link to="/profile">{user.email}</Link>
                        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>{" "}
                        <Link to="/register">Register</Link>
                    </>
                )}

            </span>
        </div>
    );
}


