import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); 
      setIsLoggedIn(true);
      alert("Login success!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
