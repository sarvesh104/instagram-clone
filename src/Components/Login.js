import React, { useState } from "react";
import googlePlayImage from "../images/play.png";
import appStoreImage from "../images/mic.png";
import facebookImage from "../images/fbm.png";
import inmain from "../images/inmain.png";
import "../App.css";
import validation from "./Validation";
import { useEffect } from "react";

function Login() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({})

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleSumbit(e){
    e.preventDefault();
    setError(validation(values));
  }

  useEffect(() =>
  {
    if(Object.keys(errors).length === 0 && (values.name !== "" && values.password !== "")) {
        alert("Succesfully Login");}
    }, [errors])







  return (
    <div className="login-container">
      <div className="box-1">
        <div className="box-1-logo">
          <img src={inmain} alt="Instagram logo" width={"50%"} />
        </div>
        
        <div >

          <div className="input-box">
            <input
              type="text"
              placeholder="Phone number, username or email address"
              name="name"
              value={values.name}
              onChange={handleChange}
            /> {errors.name && <p style={{color:'red',fontSize:"13px"}}>
                {errors.name}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />{errors.password && <p style={{color:'red',fontSize:"13px"}}>
            {errors.password}</p>}
          </div>

          <div className="login-button-box" >
            <button className="login-button" onClick={handleSumbit}>Login</button>
          </div>
        </div>
        <div className="lines-box">
          <div className="line-1"></div>
          <div className="or-box">OR</div>
          <div className="line-2"></div>
        </div>
        <div className="fb-box">
          <span className="fb-vp">
            <img
              src={facebookImage}
              alt="#"
              className="fb-logo"
              width="20px"
              height="20px"
            />
          </span>
          <p className="fb-link">Log in with Facebook</p>
        </div>
        <div className="forgetten-password-box">
          <p className="forgotten-password-link">Forgot Password?</p>
        </div>
      </div>

      <div className="box-2">
        <p>
          Don't have an account? <span className="sign-up-span">Sign up</span>
        </p>
      </div>

      <div className="get-app-box">
        <p>Get the app.</p>
      </div>

      <div className="app-store-google-play-box" style={{paddingBottom:"50px",}}>
        <img
          src={appStoreImage}
          alt="Instagram logo"
          className="app-store-image"
          width="200px"
          height="100px"
        />
        <img
          src={googlePlayImage}
          alt="Instagram logo"
          className="google-play-image"
          width="200px"
          height="100px"
        />
      </div>
    </div>
  );
}

export default Login;
