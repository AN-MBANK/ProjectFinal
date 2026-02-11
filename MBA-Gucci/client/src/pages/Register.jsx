import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
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
      await api.post("/auth/register", form);
      alert("Register success!");
      navigate("/login");
    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
