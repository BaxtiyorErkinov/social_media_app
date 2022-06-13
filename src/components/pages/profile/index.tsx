import React, { FC } from "react";
import { useAuth } from '../../../hooks/useAuth'
import "./profile.css"

const Profile: FC = () => {
  const {user} = useAuth();
  console.log(user)

  return <div className="profile__wrapper">
    <div className="profile__avatar">
      <img src={user?.avatar} alt="" />
    </div>
    <div className="profile__user__info">
      <h3>User information:</h3>
      <p><span>FULLNAME:</span> {user?.name}</p>
      <p><span>AGE:</span> {user?.age}</p>
      <p><span>JOB:</span> {user?.job}</p>
      <p><span>REGION:</span> {user?.region}</p>
    </div>
    <div className="bubble"></div>
    <div className="bubble2"></div>
  </div>;
};

export default Profile;
