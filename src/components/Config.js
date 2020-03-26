import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Config.css";
import { Redirect, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Config = ({ match }) => {
  const [loggedin, setLoggedin] = useState(true);

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
  const [message, setMessage] = useState("");
  const [titleOpen, setTitleOpen] = useState(false);
  useEffect(() => {
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
            <input
              value={course.title}
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </div>
        )}
        <div
          onClick={async (e) => {
            if (titleOpen) {
              const token = localStorage.getItem("auth-token");
              const response = await axios.put(
                `/api/courses/${match.params.id}/title`,
                { title: course.title },
                { headers: { "x-access-token": token } }
              );
            }
            setTitleOpen(!titleOpen);
          }}
        >
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
      <div className="config-info">
        <ul>
          <li>
            You can only delete a day if the course have zero active subscribers
            (subscribers whose course is not completed).
          </li>
          <li>
            A course can be Published only if each day has got some content in
            it.
          </li>
          <li>The title for each day is optional.</li>
          <li>
            The text-wrap will not preserve the line brakes and tabs in the
            email.
          </li>
          <li>
            You should prefer to write content somewhere else first and then
            just paste it here, else you'll have to keep on clicking save
            changes in order to not loose the content already written.
          </li>
        </ul>
      </div>
      {message && <div className="config-message">{message}</div>}
      <div className="config-day-adder">
        <p>Total Days : {course.content && course.content.length}</p>
        <button
          onClick={async (e) => {
            const token = localStorage.getItem("auth-token");
            const response = await axios.post(
              `/api/courses/${match.params.id}/day`,
              {},
              { headers: { "x-access-token": token } }
            );
            setCourse(response.data.data);
          }}
        >
          extend +{" "}
        </button>
      </div>
      <div className="config-options">
        {course && course.content && course.content.length && (
          <div className="config-publish">
            <p>Publish</p>
            <div
              onClick={async (e) => {
                const token = localStorage.getItem("auth-token");
                const response = await axios.post(
                  `/api/courses/${match.params.id}`,
                  {},
                  { headers: { "x-access-token": token } }
                );
                if (response.data.data) {
                  setCourse(response.data.data);
                }
                if (response.data.err) {
                  setMessage(response.data.err);
                  setTimeout(() => {
                    setMessage("");
                  }, 3000);
                }
              }}
            >
              {course && course.isPublished ? (
                <FontAwesomeIcon
                  icon={faToggleOn}
                  style={{
                    color: "#9c27b0",
                    marginLeft: "10px",
                    cursor: "pointer"
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faToggleOff}
                  style={{
                    color: "grey",
                    marginLeft: "10px",
                    cursor: "pointer"
                  }}
                />
              )}
            </div>
          </div>
        )}

        <button className="config-delete-course">Delete this Course !</button>
      </div>

      <div className="config-material-holder">
        {course &&
          course.content &&
          course.content.map((item, i) => (
            <div className="config-material-day">
              <div className="config-day-header">
                <p>Day {i + 1} </p>{" "}
                <button
                  onClick={async (e) => {
                    const token = localStorage.getItem("auth-token");
                    const response = await axios.put(
                      `/api/courses/${match.params.id}/day`,
                      { day: i + 1 },
                      { headers: { "x-access-token": token } }
                    );
                    if (response.data && response.data.data) {
                      setCourse(response.data.data);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="config-material-title">
                Title{" "}
                <input
                  value={item.title}
                  onChange={(e) => {
                    if (!course) return;
                    const c = { ...course };
                    c.content[i].title = e.target.value;
                    setCourse(c);
                  }}
                  placeholder="enter the Title"
                />{" "}
              </div>
              <div className="config-material-content">
                Material{" "}
                <textarea
                  placeholder="enter the day material"
                  value={item.material}
                  onChange={(e) => {
                    if (!course) return;
                    const c = { ...course };
                    c.content[i].material = e.target.value;
                    setCourse(c);
                  }}
                />{" "}
              </div>
              <button
                className="config-save-changes"
                onClick={async (e) => {
                  const token = localStorage.getItem("auth-token");
                  const response = await axios.put(
                    `/api/courses/${match.params.id}`,
                    { title: item.title, material: item.material, day: i + 1 },
                    { headers: { "x-access-token": token } }
                  );
                }}
              >
                save changes
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Config;
