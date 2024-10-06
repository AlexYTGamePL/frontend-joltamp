import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterSite() {
  const navigate = useNavigate();
  useEffect(() => {
    import("./register.css");
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [errorData, setErrorData] = useState("");

  const usernameValidPattern = /^[a-zA-Z0-9!@#$%]*$/;
  const emailValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordValidPattern = /^(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]*$/;

  function addErrorClass(target: HTMLInputElement, ifCorrect: boolean) {
    if (ifCorrect) {
      target.classList.remove("errorClass");
      target.classList.add("noterrorClass");
    } else {
      target.classList.add("errorClass");
      target.classList.remove("noterrorClass");
    }
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    const isValid: boolean =
      usernameValidPattern.test(e.target.value) && e.target.value.length > 3;
    addErrorClass(e.target, isValid);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const isValid: boolean =
      emailValidPattern.test(e.target.value) && e.target.value.length > 5;
    addErrorClass(e.target, isValid);
  };

  const handlePassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
    const isValid: boolean =
      passwordValidPattern.test(e.target.value) &&
      e.target.value.length > 7 &&
      (password2 == e.target.value || password2 == "");
    addErrorClass(e.target, isValid);
  };

  const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    const isValid: boolean =
      passwordValidPattern.test(e.target.value) &&
      e.target.value.length > 7 &&
      password1 == e.target.value;
    addErrorClass(e.target, isValid);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      usernameValidPattern.test(username) &&
      username.length > 3 &&
      emailValidPattern.test(email) &&
      email.length > 5 &&
      passwordValidPattern.test(password1) &&
      password1.length > 7 &&
      passwordValidPattern.test(password2) &&
      password1.length > 7 &&
      password1 == password2
    ) {
      setErrorData("");
      // axios sends data to backend
      axios
        .post(
          `http://${import.meta.env.VITE_BACKEND_IP}:${
            import.meta.env.VITE_BACKEND_PORT
          }/api/v0/users/register`,
          {
            username: username,
            password: password1,
            email: email,
          }
        )
        .then((res) => {
          if (res.status == 200) {
            const jwt = res.data.user["JWT"];
            const userId = res.data["UserId"];
            if (jwt) {
              localStorage.setItem("jwt", jwt);
              localStorage.setItem("userId", userId);
              navigate("/panel");
            } else {
              console.error("No jwt");
            }
          }
        })
        .catch((err: { response?: { data: { error: string } } }) => {
          console.log(err);
          if (err.response && err.response.data && err.response.data.error) {
            setErrorData(err.response?.data.error);
          }
        });
    } else {
      setErrorData("Error message");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password1}
            onChange={handlePassword1Change}
            required
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Repeat password"
            value={password2}
            onChange={handlePassword2Change}
            required
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="errordata">
          <p>{errorData}</p>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="register-link">
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
          <p>
            Don't wanna be here? <a href="/">Kill your self</a>
          </p>
        </div>
      </form>
    </div>
  );
}
