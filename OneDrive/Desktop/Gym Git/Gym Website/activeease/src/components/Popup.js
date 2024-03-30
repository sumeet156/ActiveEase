import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Popup.css";

function Popup({ loginState, registerState, loginUpdate, registerUpdate }) {
  const [userName, setUserName]= useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {loginState && (
        <>
          <div className="popup">
            <div className="heading">
              <h2>Log in</h2>
              <FaTimes
                size={30}
                color="red"
                className="custom-icon"
                onClick={() => {
                  loginUpdate(false);
                }}
              />
            </div>
            <div className="input">
              <input type="text" value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} placeholder="Enter a email" />
              <input value={password} onChange={(e)=>{
                setPassword(e.target.value);
              }} type="password" placeholder="Enter a password" />
              <button className="login">Login</button>
            </div>
            <div className="other">
              <p className="account">Already have account ? </p>
              <a onClick={() => {loginUpdate(false);
            registerUpdate(true);}} className="register">
                Register
              </a>
            </div>
          </div>
        </>
      )}

      {registerState && (
        <>
          <div className="popup">
            <div className="heading">
              <h2>Register</h2>
              <FaTimes
                size={30}
                color="red"
                className="custom-icon"
                onClick={() => {
                  registerUpdate(false);
                }}
              />
            </div>
            <div className="input">
              <input type="text" value={userName} onChange={(e)=>{
                setUserName(e.target.value);
              }} placeholder="Enter a user name" />
              <input type="email" value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} placeholder="Enter a email" />
              <input value={password} onChange={(e)=>{
                setPassword(e.target.value);
              }} type="password" placeholder="Enter a password" />
              <button className="login">Register</button>
            </div>
            <div className="other">
              <p className="account">Forgot Password ? </p>
              <a onClick={() => {loginUpdate(true);
            registerUpdate(false);}} className="register">
                Sign in
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Popup;
