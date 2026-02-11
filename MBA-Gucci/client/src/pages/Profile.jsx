import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";
export default function Profile() {

    const navigate = useNavigate();


    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    if (!user) return <p style={{ textAlign: "center" }}>Loading...</p>;

    return (
        <div className="profile-wrapper">
            <div className="profile-card">

                {user.avatar && (
                    <div className="avatar-box">
                        <img src={user.avatar} alt="avatar" />
                    </div>
                )}

                <h3>{user.username}</h3>
                <p>{user.bio}</p>

                <div className="contact-info">
                    {user.phone && (
                        <div className="contact-item">
                            📞 {user.phone}
                        </div>
                    )}

                    {user.facebook && (
                        <div className="contact-item">
                            🌐 {user.facebook}
                        </div>
                    )}

                    {user.zalo && (
                        <div className="contact-item">
                            💬 {user.zalo}
                        </div>
                    )}
                </div>

                <button
                    className="edit-btn"
                    onClick={() => navigate("/edit-profile")}
                >
                    Edit Profile
                </button>

            </div>
        </div>
    );

}