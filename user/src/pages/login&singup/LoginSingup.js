import React, {  useState } from "react";
import "./LoginSingup.css";
import { Link, useNavigate } from "react-router-dom";
import cinemaImage from "../../assets/cinema.jpg";
import Img from "../../components/lazyLoading/Img";
import OtpBox from "./OtpBox";

const LoginSingup = () => {
  const [coverbox, setCoverbox] = useState(false);
  const [usersingup, setUserSingup] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [userLogin,setUserLogin]= useState({ email: "", password: "" ,cpassword:""})
  const [otpBox, setOtpBox] = useState(false);
  const [otpBoxForget, setOtpBoxForget] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [otp,setOtp]=useState(null)
  const [otpError,setOtpError]=useState("");
  const [regError,setRegError]=useState("");
  const [loginError,setLoginError]=useState("");
  const [verification,setVerification]=useState(false);
  const navigate=useNavigate();
 
  const handlesubmitSingup = async (e) => {
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
      if (json.error) {
       return setRegError(json.error)
      } else {
        setOtpBox(true);
        setRegError("")
      }
    } else if (password === cpassword) {
     return setRegError("password must be 8 character");
    } else {
     return setRegError("password must be same");
    }
  };
 
  const handlesubmitLogin = async (e) => {
    e.preventDefault();
    const {email,password}=userLogin
    const responce = await fetch("http://localhost:8080/users/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    });
    
    const json = await responce.json();
    if (json.error) {
      setLoginError(json.error)
    } else {
      localStorage.setItem("userData",JSON.stringify(json))
        navigate("/")
        window.location.reload();
        setUserLogin({ email: "", password: "" })
        setLoginError("")
    }
}

  const handleVerify=async(e)=>{
    e.preventDefault()
    const responce = await fetch(`http://localhost:8080/users/verifyotp/${otp}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await responce.json();
   
    if(json.error){
      setOtpError(json.error)
    }else{
      setCoverbox(false)
      setUserSingup({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      })
    }
  }

  const verifyOtpForget=async(e)=>{
    e.preventDefault()
    const responce=await fetch(`http://localhost:8080/users/verifyotpforget/${otp}`)
    const json = await responce.json();
    if (json) {
      setVerification(true)
      setOtpError("")
    }else{
      setOtpError("OTP is incorrect")
    }
  }

  const handleonchangeSingup = (e) => {
    setUserSingup({ ...usersingup, [e.target.name]: e.target.value });
  };

  const handleonchangeLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  let resendOtpreg=async()=>{
    const email=usersingup.email
    await fetch(`http://localhost:8080/users/resendotp/${email}`)
  }

  let resendOtpForget=async()=>{
    const email=userLogin.email
   const responce= await fetch(`http://localhost:8080/users/resendotp/${email}`)
    const json=await responce.json()
    alert(json)
  }

  let sendOtpForget=async()=>{
    const email=userLogin.email
   const responce=  await fetch(`http://localhost:8080/users/resendotp/${email}`)
   setOtpBoxForget(true)
    const json=await responce.json()
    alert(json)
  }

  let handleonchangePassword = async (e) => {
    e.preventDefault();
    const { email, password: newpassword, cpassword: cnewpassword } = userLogin;
    if (newpassword.length >= 8 && newpassword === cnewpassword) {
      try {
        const response = await fetch("http://localhost:8080/users/forgetpass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, newpassword }),
        });
  
        const json = await response.json();
  
        if (json.error) {
          setLoginError(json.error);
        } else {
          setLoginError("");
          alert(json.success);
          setVerification(false);
          setOtpBoxForget(false)
          setForgetPass(false);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoginError("An error occurred while processing your request.");
      }
    } else if (newpassword !== cnewpassword) {
      setLoginError("Password and confirm password must be the same.");
    } else {
      setLoginError("Password must be 8 characters.");
    }
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
         <div>
            <p className="text-danger text-center" style={{marginTop:"15px"}}>{loginError}</p>
          </div>
          <h2>Login</h2>
          <form onSubmit={!forgetPass? handlesubmitLogin : !verification? verifyOtpForget :handleonchangePassword}>
            {
              !forgetPass ?(
                <>
                <div class="input-field">
              <input type="text" name="email" required spellcheck="false" onChange={handleonchangeLogin}/>
              <label>Enter email</label>
              <span className="icon ">
                <i className="fa-solid fa-envelope text-light"></i>
              </span>
            </div>
            <div class="input-field">
              <input type="password" name="password" required spellcheck="false" onChange={handleonchangeLogin}/>
              <label>Password</label>
              <span className="icon ">
                <i className="fa-solid fa-lock text-light"></i>
              </span>
            </div>
            <div class="remember-forgot mt-3">
              <label>
                <input type="checkbox" required className="mr-2" />
                Remember Me
              </label>
              <o className="text-primary" onClick={()=> {setForgetPass(true); setLoginError("")}}>Forgot Password?</o>
            </div>
                </>
              ):(
                !verification? (
                  <>
                  <div onClick={()=> {setForgetPass(false);setOtpBoxForget(false)}} className="text-light " style={{position:"absolute",top:"0px"}}>Back</div>
                    <div class="input-field">
                  <input type="text" name="email" required spellcheck="false" onChange={handleonchangeLogin}/>
                  <label>Enter email</label>
                  <span className="icon ">
                    <i className="fa-solid fa-envelope text-light"></i>
                  </span>
                </div>
                  <p  className="text-primary" onClick={sendOtpForget}>send Otp</p>
                  {
                  otpBoxForget &&   
                  <OtpBox
                  otpError={otpError}
                  setOtp={setOtp}
                  Otp={otp}
                  resendOtp={resendOtpForget}
                  />
                  }
                  </>
                  ):(
                    <>
                      <div class="input-field">
                       <input type="password" name="password" required spellcheck="false" onChange={handleonchangeLogin}/>
                       <label>New Password</label>
                       <span className="icon ">
                       <i className="fa-solid fa-lock text-light"></i>
                       </span>
                       </div>
                      <div class="input-field">
                       <input type="text" name="cpassword" required spellcheck="false" onChange={handleonchangeLogin}/>
                       <label>Confirm Password</label>
                       <span className="icon ">
                       <i className="fa-solid fa-lock text-light"></i>
                       </span>
                       </div>
                    </>
                  )

              )
             
            }
            
            <button type="submit" className="loginregisterbtn">
              { forgetPass ? verification? "Update":"Verify" :"Login"}
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
          <form  onSubmit={otpBox?handleVerify:handlesubmitSingup}>
            {!otpBox ? (
              <>
                <div class="input-field d-flex">
                  <input
                    type="text"
                    name="name"
                    required
                    spellcheck="false"
                    onChange={handleonchangeSingup}
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
                    onChange={handleonchangeSingup}
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
                    onChange={handleonchangeSingup}
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
                    onChange={handleonchangeSingup}
                  />
                  <label>Confirm Password</label>
                  <span className="icon ">
                    <i className="fa-solid fa-lock text-light"></i>
                  </span>
                </div>
                <div className="remember-forgot mt-3">
                  <label>
                    <input type="checkbox" required />
                    Terms & Conditions
                  </label>
                  
                </div>
              </>
            ) : (
                <OtpBox  
                  otpError={otpError}
                  setOtp={setOtp}
                  Otp={otp}
                  resendOtp={resendOtpreg}
                />
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
