import { Link } from "react-router-dom";
import "./Reset.css";
import OTP_IMG from "../../assests/otp-img.jpg";
import { useRef, useState, useContext } from "react";
import { Context } from "../../context/Context";

const Reset = () => {
  const otpRef = useRef();
  const [isOTPcorrect, setIsOTPcorrrect] = useState(false);
  const { otp } = useContext(Context);

  const handleOTPequality = () => {
    setIsOTPcorrrect(true);
    console.log(otp);
  };

  return (
    <div className="reset-main-div">
      <div className="reset-sub-div">
        <div className="reset-title">
          <h1 className="h1">OTP Validation</h1>
          <p className="p">
            Enter 6-digit OTP <br /> sent to an admin's email.
          </p>
        </div>
        <div className="reset-img-container">
          <img
            src={OTP_IMG}
            alt=""
            className="reset-img"
            width={120}
            height={120}
          />
        </div>
        <form className="reset-form">
          <input
            className="reset-input"
            type="text"
            name="admin-otp"
            id="admin-otp"
            placeholder="Enter OTP..."
            required
            ref={otpRef}
          />
          <button type="submit" className="reset-btn">
            <Link
              onClick={handleOTPequality}
              className="Link"
              to={isOTPcorrect ? "/newpassword" : ""}
            >
              reset
            </Link>
          </button>
        </form>
        <div className="reset-forgot">
          Don't get OTP? <Link className="Link reset-link">Resend.</Link>
        </div>
      </div>
    </div>
  );
};

export default Reset;
