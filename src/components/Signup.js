import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLock,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, Redirect } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const [error, setError] = useState({ isError: false, reason: "" });
  const [invalidForm, setFormInvalidity] = useState(true);
  // submit handler
  const handleSubmit = async (e) => {
    const res = await axios.post("/api/user/new", {
      email,
      password,
      username
    });
    // error handler
    if (!res.data.error) {
      localStorage.setItem("auth-token", res.data.token);
      setloggedin(true);
    } else {
      setError({ isError: res.data.error, reason: res.data.reason });
    }
  };
  // use effect hook
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setloggedin(true);
    }
    if (
      email.trim(" ").length > 0 &&
      password.trim(" ").length > 0 &&
      username.trim(" ").length > 0
    ) {
      setFormInvalidity(false);
    } else {
      setFormInvalidity(true);
    }
  }, [email, password, username]);
  return (
    <main className="main">
      <section className="signup-section">
        <div>
          <p>
            Sign Up to <span className="coloured">Maillux</span>
          </p>
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
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
          <p>Already Registerd?</p>
          <Link to="/login">Login</Link>
          {loggedin && <Redirect to="/courses" />}
        </div>
      </section>
    </main>
  );
};
export default Signup;
