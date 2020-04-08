import React, { Component, useState, useEffect } from "react";
import "./Landing_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLock,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../axios";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Landing_page = () => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchData = async () => {
    const token = await localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
      return;
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token },
    });
    setUser(response.data);
  };
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="Landing-Page">
      {" "}
      <header>
        <nav>
          <div className="Left">
            <div className="logo-container">
              <FontAwesomeIcon
                icon={faGraduationCap}
                flip="horizontal"
                className="logo"
              />
              {""}
              <div>Maillux</div>
            </div>
            <div className="nav-links">
              <Link to="/courses">Learn</Link>
              <Link to="/register">Create</Link>
            </div>
          </div>
          {!loggedin ? (
            <div className="Right">
              <Link to="/login">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faLock} className="lock" />
                  {"Login"}
                </div>
              </Link>

              <Link to="/register">
                {" "}
                <div className="signup-button">
                  <div>Sign Up</div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="Right">
              <button
                onClick={(e) => {
                  localStorage.removeItem("auth-token");
                  {
                    setLoggedin(false);
                  }
                }}
              >
                LogOut
              </button>
            </div>
          )}
        </nav>
      </header>
      <section className="main-section">
        <article>
          <div>
            <span className="light">Learn</span>{" "}
            <span className="mild">
              something <span className="light">new </span>
              everyday,
              <br />
              from
            </span>{" "}
            <span className="light"> e-mail </span>{" "}
            <span className="mild"> courses </span>{" "}
          </div>
          <div style={{ fontSize: "20px" }}>
            Subscribe to email courses <span className="light">or</span> Create
            your own email course, fill the content, publish it to share your
            knowledge with the world.
          </div>
          <div>
            <Link to="/courses">Start Learning</Link>
            <Link to="/register">Sign Up to create a course</Link>
          </div>
        </article>
        <aside>
          <div>
            <img src="teach.jpeg" />
          </div>
        </aside>
      </section>
      <div className="connect">
        <div>Connect with us</div>

        <div>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <footer> © Maillux 2020</footer>
    </main>
  );
};

export default Landing_page;
