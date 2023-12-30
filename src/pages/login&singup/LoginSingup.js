import React, { useState } from "react";
import "./LoginSingup.css";
import { Link } from "react-router-dom";
import cinemaImage from "../../assets/cinema.jpg";
import Img from "../../components/lazyLoading/Img";

const LoginSingup = () => {
  const [coverbox, setCoverbox] = useState(false);
  const [usersingup, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [otpBox, setOtpBox] = useState(false);
  const [otp,setOtp]=useState(null)
  const [otpError,setOtpError]=useState("");
  const [regError,setRegError]=useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = usersingup;
    if (password.length >= 8 && password === cpassword) {
      const responce = await fetch("http://localhost:8080/users/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await responce.json();
      console.log(json);
      if (json.error) {
       return setRegError(json.error)
      } else {
        setOtpBox(true);
        setOtpError("Otp Sent SuccessFully")
      }
    } else if (password === cpassword) {
     return setRegError("password must be 8 character");
    } else {
     return setRegError("password must be same");
    }
  };
 
  const handleVerify=async(e)=>{
    e.preventDefault()
    const responce = await fetch(`http://localhost:8080/users/verifyotp/${otp}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await responce.json();
    setOtpError(json.error)
  }
  const handleonchange = (e) => {
    setUser({ ...usersingup, [e.target.name]: e.target.value });
  };
  return (
    // <!-- Login Page -->
    <div className="login-singup-container">
      <div className="backdrop-img">
        <Img src={cinemaImage}></Img>
      </div>
      <div className="opacity-layer"></div>

      <div
        className={`cover_box ${coverbox ? "active-register" : "active-login"}`}
      >
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Enter email</label>
              <span className="icon ">
                <i className="fa-solid fa-envelope text-light"></i>
              </span>
            </div>
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Password</label>
              <span className="icon ">
                <i className="fa-solid fa-lock text-light"></i>
              </span>
            </div>
            <div class="remember-forgot mt-3">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <Link href="#">Forgot Password?</Link>
            </div>
            <button type="submit" className="loginregisterbtn">
              Login
            </button>
            <div className="login-register">
              <p className="text-light">
                Don't Have An Account?{" "}
                <Link
                  to="#"
                  onClick={() => setCoverbox(true)}
                  className="register-link ml-2"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* <!-- Registration Page --> */}
        <div className="form-box register">
          {
            !otpBox &&(
          <div>
            <p className="text-danger text-center" style={{marginTop:"15px"}}>{regError}</p>
          </div>
            )
          }

          <h2>Register</h2>
          <form  onSubmit={otpBox?handleVerify:handlesubmit}>
            {!otpBox ? (
              <>
                <div class="input-field d-flex">
                  <input
                    type="text"
                    name="name"
                    required
                    spellcheck="false"
                    onChange={handleonchange}
                  />
                  <label>Username</label>
                  <span className="icon ">
                    <i className="fa-solid fa-user text-light"></i>
                  </span>
                </div>
                <div class="input-field">
                  <input
                    type="email"
                    name="email"
                    required
                    spellcheck="false"
                    onChange={handleonchange}
                  />
                  <label>Email</label>
                  <span className="icon ">
                    <i className="fa-solid fa-envelope text-light"></i>
                  </span>
                </div>

                <div class="input-field">
                  <input
                    type="password"
                    name="password"
                    required
                    spellcheck="false"
                    onChange={handleonchange}
                  />
                  <label>Password</label>
                  <span className="icon ">
                    <i className="fa-solid fa-lock text-light"></i>
                  </span>
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="cpassword"
                    required
                    spellcheck="false"
                    onChange={handleonchange}
                  />
                  <label>Confirm Password</label>
                  <span className="icon ">
                    <i className="fa-solid fa-lock text-light"></i>
                  </span>
                </div>
                <div className="remember-forgot mt-3">
                  <label>
                    <input type="checkbox" />
                    Terms & Conditions
                  </label>
                  <Link to="#">Forgot Password?</Link>
                </div>
              </>
            ) : (
              <>
              <p className="text-success text-center" >{otpError}</p>
              <div class="input-field">
                <input
                  type="number"
                  name="otp"
                  required
                  spellcheck="false"
                  onChange={(e)=> setOtp(e.target.value)}
                />
                <label>Enter otp</label>
                <span className="icon ">
                  <i className="fa-solid fa-lock text-light"></i>
                </span>
              </div>
                <p className="text-light text-center">Do Not Have Otp ? <span className="text-danger">30</span> </p>
                </>
            )}

            <button type="submit" className="loginregisterbtn">
              {otpBox ? "Verify" : "Register"}
            </button>
            <div className="login-register text-light">
              <p>
                Already Have An Account?{" "}
                <Link
                  to="#"
                  onClick={() =>{ setCoverbox(false); setOtpBox(false)}}
                  className="login-link ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
