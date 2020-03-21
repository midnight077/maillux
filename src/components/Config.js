import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Config.css";
import { Redirect, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Config = ({ match }) => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchCourse = () => {
    user &&
      user.courses &&
      user.courses.forEach((item) => {
        if (item._id == match.params.id) {
          setCourse(item);
        }
      });
  };
  const fetchData = async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token }
    });
    response.data.courses &&
      response.data.courses.forEach((item) => {
        if (item._id == match.params.id) {
          setCourse(item);
        }
      });
    setUser(response.data);
  };

  const [course, setCourse] = useState({});
  const [user, setUser] = useState({});
  const [titleOpen, setTitleOpen] = useState(false);
  useEffect(() => {
    console.log(1);
    fetchData();
  }, []);

  return (
    <>
      {!loggedin ? <Redirect to="/" /> : null}
      <div className="config-title">
        {!titleOpen ? (
          <div>{course.title}</div>
        ) : (
          <div>
            <input value={course.title} />
          </div>
        )}
        <div onClick={(e) => setTitleOpen(!titleOpen)}>
          {titleOpen ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="config-title-icon"
              style={{ color: "#375216" }}
              title="save"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="config-title-icon"
              style={{ color: "#b12a00" }}
              title="edit "
            />
          )}
        </div>
      </div>
      <div className="config-material-holder">
        {course &&
          course.content &&
          course.content.map((item, i) => (
            <div className="config-material-day">
              Day {i + 1} <br></br>
              <div className="config-material-title">
                Title <input placeholder="enter the Title" />{" "}
              </div>
              <div className="config-material-content">
                Material <textarea placeholder="enter the day material" />{" "}
              </div>
              <button>save changes</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Config;
