import React, { FC, useState, SyntheticEvent, useEffect } from "react";
import { IUserData } from "./authtypes";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { Alert } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../../hooks/useAuth";
import "./auth.css";
import { app } from "../../../firebase";


const Auth: FC = () => {
  const navigate = useNavigate()
  const [isRegForm, setIsRegForm] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const {user, ga} = useAuth()
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
    name: ""
  } as IUserData);

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
        await updateProfile(res.user, {
          displayName: userData.name
        })
        navigate("/")
      } catch (e: any) {
        setIsError(e.message);
      }
    } else {
      try {
        const res = await signInWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
        await navigate("")
      } catch (e: any) {
        setIsError(e.message);
      }
    }
    setUserData({
      email: "",
      password: "",
      name: ""
    });
  };
  return (
    <div className="auth_wrapper">
      {isError && <Alert severity="error">{isError}</Alert>}
      <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="textfield"
        />
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
          className="textfield"
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
          className="textfield"
        />
        <button
          type="submit"
          onClick={() => setIsRegForm(false)}
          className="login-btn"
        >
          Sign In
        </button>
        <button
          type="submit"
          onClick={() => setIsRegForm(true)}
          className="reg-btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Auth;
