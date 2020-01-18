import React, { Component } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLock,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
class Login extends Component {
  render() {
    return (
      <main className="main">
        <section>
          <div>
            <p>
              Sign Up to <span className="coloured">Maillux</span>
            </p>
            <div>
              <input type="text" placeholder="Username" required></input>
              <input type="email" placeholder="email" required></input>
              <input type="password" placeholder="password" required></input>
            </div>
            <button>Submit</button>
            <p>Already Registerd?</p>
            <Link to="/login">Login</Link>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
