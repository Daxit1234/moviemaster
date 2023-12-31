import React, { useEffect, useState } from 'react';

function OtpBox({ otpError, setOtp, resendOtp }) {
  const [timeStamp, setTimeStamp] = useState(60);
  const [resendVisible, setResendVisible] = useState(false);

  useEffect(() => {
    const timer = timeStamp > 0 && setInterval(() => {
      setTimeStamp((prevTime) => prevTime - 1);
    }, 1000);
    return () =>clearInterval(timer);
  }, [timeStamp]);

  let handleTimer = () => {
    setTimeStamp(60);
    setResendVisible(false);
    resendOtp()
  };

  useEffect(() => {
    if (timeStamp === 0) {
      setResendVisible(true);
    }
  }, [timeStamp]);

  return (
    <>
      <p className="text-danger text-center">{otpError}</p>
      <div className="input-field">
        <input
          type="number"
          name="otp"
          required
          spellCheck="false"
          onChange={(e) => setOtp(e.target.value)}
        />
        <label>Enter otp</label>
        <span className="icon ">
          <i className="fa-solid fa-lock text-light"></i>
        </span>
      </div>
      <p className="text-light text-center">Resend OTP in : 
        {timeStamp !== 0 ? (
          <span className="text-success"> 00:{timeStamp < 10 ? `0${timeStamp}` : timeStamp}</span>
        ) : (
          <span className="text-primary font-itali" onClick={handleTimer}>
            {resendVisible ? 'Resend OTP' : ''}
          </span>
        )}
      </p>
    </>
  );
}

export default OtpBox;
