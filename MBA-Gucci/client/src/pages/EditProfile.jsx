import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

import "../styles/profile.css";

export default function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    bio: "",
    phone: "",
    facebook: "",
    zalo: "",
    avatar: ""
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setForm({
        username: user.username || "",
        bio: user.bio || "",
        phone: user.phone || "",
        facebook: user.facebook || "",
        zalo: user.zalo || "",
        avatar: user.avatar || ""
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(
        "/auth/profile",
        form,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Profile updated!");

      navigate("/profile");   // 👈 thêm dòng này
    } catch (err) {
      alert("Error updating profile");
    }
  };


  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="file"
            accept="image/*"
            onChange={handleAvatar}
          />

          {form.avatar && (
            <div className="avatar-box">
              <img src={form.avatar} alt="preview" />
            </div>
          )}

          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            name="bio"
            placeholder="Bio"
            value={form.bio}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="facebook"
            placeholder="Facebook Link"
            value={form.facebook}
            onChange={handleChange}
          />

          <input
            name="zalo"
            placeholder="Zalo"
            value={form.zalo}
            onChange={handleChange}
          />

          <button className="edit-btn">Save</button>
        </form>
      </div>
    </div>
  );
}
