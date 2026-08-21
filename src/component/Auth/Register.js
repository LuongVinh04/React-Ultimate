import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreedDataProcessing, setAgreedDataProcessing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((preShowPassword) => !preShowPassword);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  const handleRegister = async () => {
    //validate
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }
    //submit apis
    let data = await postRegister(email, username, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Already have an account?</span>
        <button onClick={() => navigate("/login")}>Login in</button>
      </div>
      <div className="title col-4 mx-auto">LuongVinhDev</div>
      <div className="welcome col-4 mx-auto">
        Get better data with conversational forms, surveys, quizzes & more.
      </div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input
            type={"username"}
            className="form-control"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              id="password-filed"
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <label className="privacy-checkbox">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span className="privacy-text">
            {" "}
            I agrre to LuongVinhDev's Terms of Service
          </span>
        </label>
        <label className="privacy-checkbox">
          <input
            type="checkbox"
            checked={agreedDataProcessing}
            onChange={(e) => setAgreedDataProcessing(e.target.checked)}
          />
          <span className="privacy-text">
            {" "}
            I accept LuongVinhDev's use of my data for the service and
            everything else described in the Privacy Policy and Data Processing
            Agreement
          </span>
        </label>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Create my free account
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/login");
            }}
          >
            Go to HomePage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
