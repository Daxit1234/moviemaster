import React, { useState } from 'react';
import "./LoginSingup.css";
import {Link} from "react-router-dom";
import cinemaImage from "../../assets/cinema.jpg"
import Img from '../../components/lazyLoading/Img';

const LoginSingup = () => {
  const [coverbox,setCoverbox]=useState(false);
  return (
    // <!-- Login Page -->
    <div className='login-singup-container'>
         <div className="backdrop-img">
                <Img src={cinemaImage}></Img>
              </div>
              <div className="opacity-layer"></div>

    <div className={`cover_box ${coverbox?"active-register":"active-login"}`}>
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
            <div class="input-field">
                    <input type="text" required spellcheck="false" />
                    <label>Enter email</label>
                    <span className='icon '>
                     <i className="fa-solid fa-envelope text-light"></i>
                    </span>
                  </div>
                  <div class="input-field">
                    <input type="text" required spellcheck="false"/>
                    <label>Password</label>
                    <span className='icon '>
                     <i className="fa-solid fa-lock text-light"></i>
                    </span>
                  </div>
                <div class="remember-forgot mt-3">
                    <label><input type="checkbox" className='mr-2'/>Remember Me</label>
                    <Link href="#">Forgot Password?</Link>
                </div>
                <button type="submit" className="loginregisterbtn">Login</button>
                <div className="login-register">
                    <p className="text-light">Don't Have An Account? <Link to="#" onClick={()=>setCoverbox(true)} className="register-link ml-2">Register</Link></p>
                </div>
            </form>
        </div>

        {/* <!-- Registration Page --> */}
        <div className="form-box register">
            <h2>Register</h2>
            <form action="#">
                <div class="input-field d-flex">
                    <input type="text" required spellcheck="false"/>
                    <label>Username</label>
                    <span className='icon '>
                     <i className="fa-solid fa-user text-light"></i>
                    </span>
                  </div>
                  <div class="input-field">
                    <input type="text" required spellcheck="false"/>
                    <label>Email</label>
                    <span className='icon '>
                     <i className="fa-solid fa-envelope text-light"></i>
                    </span>
                  </div>
                  <div class="input-field">
                    <input type="text" required spellcheck="false"/>
                    <label>Password</label>
                    <span className='icon '>
                     <i className="fa-solid fa-lock text-light"></i>
                    </span>
                  </div>
                  {/* <div class="input-field">
                    <input type="text" required spellcheck="false"/>
                    <label>otp</label>
                    <span className='icon '>
                     <i className="fa-solid fa-lock text-light"></i>
                    </span>
                  </div> */}
                <div className="remember-forgot mt-3">
                    <label><input type="checkbox" />Terms & Conditions</label>
                    <Link to="#">Forgot Password?</Link>
                </div>
                <button type="submit" className="loginregisterbtn">Register</button>
                <div className="login-register text-light">
                    <p>Already Have An Account? <Link to="#" onClick={()=>setCoverbox(false)} className="login-link ml-2">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default LoginSingup
