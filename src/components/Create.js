import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Redirect, Link } from "react-router-dom";

import "./Create.css";
const Create = () => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchData = async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
      return;
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token }
    });
    setUser(response.data);
  };
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState();
  const [description, setDescription] = useState("");
  const toggleForm = () => {
    setForm(!form);
  };
  const reset = () => {
    setTitle("");
    setDuration();
    setDescription();
  };
  const addCourse = async () => {
    if (loggedin && title && duration && description) {
      const content = { title, duration, description };
      const token = localStorage.getItem("auth-token");
      const response = await axios.post(
        `/api/courses/`,
        { content },
        { headers: { "x-access-token": token } }
      );
      reset();
      toggleForm();
    }
  };
  if (loggedin) {
    return (
      <>
        <nav className="create-nav">Configuration Panel</nav>
        <div
          className="create-button-new"
          onClick={() => {
            toggleForm();
          }}
        >
          Add new Course +
        </div>
        {form ? (
          <form className="create-form">
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              autoComplete="off"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <input
              type="number"
              name="duration"
              placeholder="Course Duration"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            ></input>
            <textarea
              type="text"
              name="description"
              placeholder="Course Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault();
                addCourse();
              }}
            >
              submit
            </button>
          </form>
        ) : null}

        <section className="create-section">
          <div>
            <p>Configure Courses</p>
            <div>
              {user.courses && user.courses.length
                ? user.courses.map((item) => (
                    <Link to={`/config/${item._id}`}>
                      <div>{item.title} </div>
                      <div>
                        {item.isPublished ? (
                          <button className="published-button">
                            Published
                          </button>
                        ) : (
                          <button className="not-published-button">
                            Not Published
                          </button>
                        )}
                        <button className="create-subs-button">
                          subs {item.subscribers.length}
                        </button>
                      </div>
                    </Link>
                  ))
                : "You have not made a course yet."}
            </div>
          </div>
        </section>
      </>
    );
  }
  return <Redirect to="/" />;
};

export default Create;
