import React from "react";
import profilePic from "../Assets/cute.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-hero">
      <img src={profilePic} alt="Profile" className="profile-hero-img" />
    </div>
  );
};

export default Profile;
