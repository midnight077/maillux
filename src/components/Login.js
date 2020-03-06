import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "../axios";
import { Link, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLock,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  // state for email password login status error and form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const [error, setError] = useState({ isError: false, reason: "" });
  const [loading, setLoading] = useState(false);
  const [invalidForm, setFormInvalidity] = useState(true);
  // submit handler
  const handleSubmit = async (e) => {
    setLoading(true);
    const res = await axios.post("api/user/login", {
      email: email,
      password: password
    });
    // error handler
    if (!res.data.error) {
      localStorage.setItem("auth-token", res.data.token);
      setloggedin(true);
    } else {
      setLoading(false);
      setError({ isError: res.data.error, reason: res.data.reason });
    }
  };
  // use effect hook
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setloggedin(true);
    }
    if (email.trim(" ").length > 0 && password.trim(" ").length > 0) {
      setFormInvalidity(false);
    } else {
      setFormInvalidity(true);
    }
  }, [email, password]);
  return (
    <main className="main">
      <section className="login-section">
        <div>
          <p>
            Login to <span className="coloured">Maillux</span>
          </p>
          <div>
            <input
              type="email"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <Link to="/forgot">Forgot Password?</Link>
          <p>Not Registered Yet ?</p>
          <Link to="/register">Create New Account</Link>
          {loggedin && <Redirect to="/courses" />}
        </div>
      </section>
    </main>
  );
};

export default Login;
