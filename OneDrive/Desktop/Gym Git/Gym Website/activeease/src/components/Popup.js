import React from "react";
import { FaTimes } from 'react-icons/fa';
import "./Popup.css";

function Popup({ loginState, registerState }) {
  return (
    <>
      {loginState && (
        <>
          <div className="popup">
            <div className="heading">
              <h2>Log in</h2>
              <FaTimes size={30} color="red" className="custom-icon" />
            </div>
            <div className="input">
              <input type="text" placeholder="Enter a email" />
              <input type="password" placeholder="Enter a password" />
              <button className="login">Login</button>
            </div>
            <div className="other">
              <p className="account">Already have account ? </p>
              <a onClick={()=>{

              }} className="register">
                
                Register
              </a>
            </div>
          </div>
        </>
      )}

      {registerState && (
        <>
          <div className="heading">
            <div className="popup">
              <h2>Register</h2>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter a user name" />
              <input type="text" placeholder="Enter a email" />
              <input type="password" placeholder="Enter a password" />
              <button className="login">Register</button>
            </div>
            <div className="other">
              <p className="account">Forgot Password ? </p>
              <a href="#" className="register">
                {" "}
                Sign in
              </a>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default Popup;
