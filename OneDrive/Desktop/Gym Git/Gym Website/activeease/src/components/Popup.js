import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Popup.css";
import axios from "axios";


function Popup({ loginState, registerState, loginUpdate, registerUpdate }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");




  const handleLogin = () => {
    axios
      .post("http://192.168.105.19:3003/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Response:", response.data);
        if(response.status===200){
            alert("Logged in successfully");
            loginUpdate(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Invalid credentials");
      });
  };

  const handleRegister = () => {
    axios
      .post("http://192.168.105.19:3003/register", {
        email: email,
        password: password,
        username: userName,
      })
      .then((response) => {
        console.log("Response:", response.data);
        alert("User registerd successfully");
        registerUpdate(false);
        loginUpdate(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registeration Unsuccessful");
      });
  };


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
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter a email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter a password"
              />
              <button onClick={handleLogin} className="login">
                Login
              </button>
            </div>
            <div className="other">
              <p className="account">Already have account ? </p>
              <a
                onClick={() => {
                  loginUpdate(false);
                  registerUpdate(true);
                }}
                className="register"
              >
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
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Enter a user name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter a email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter a password"
              />
              <button onClick={handleRegister} className="register">Register</button>
            </div>
            <div className="other">
              <p className="account">Forgot Password ? </p>
              <a
                onClick={() => {
                  loginUpdate(true);
                  registerUpdate(false);
                }}
                className="register"
              >
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
