import React, { Component } from "react";
import "./Landing_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLock,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";

import { Route, Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
class Landing_Page extends Component {
  render() {
    return (
      <main>
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
                <a href="/google">Learn</a>
                <a href="/google">Create</a>
              </div>
            </div>
            <div className="Right">
              <div>
                <FontAwesomeIcon icon={faLock} className="lock" />
                <Link to="/login">Login</Link>
              </div>
              <div className="signup-button">
                <div>Sign Up</div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <article>
            <div>
              <span className="light">Learn</span>{" "}
              <span className="mild">
                something <span className="light">new </span>everyday,
                <br />
                from
              </span>{" "}
              <span className="light"> e-mail </span>{" "}
              <span className="mild"> courses </span>{" "}
            </div>
            <div>
              Subscribe to email courses <span className="light">or</span>{" "}
              Create your own email course, fill the content, publish it to
              share your knowledge with the world.
            </div>
            <div>
              <a href="/courses">Start Learning</a>

              <a href="/courses">Sign Up to create a course</a>
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
  }
}

export default Landing_Page;
