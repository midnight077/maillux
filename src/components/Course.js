import React, { useState, useEffect } from "react";
import "./Course.css";
import { getCourseById } from "../utils/api";
import axios from "../axios";
const Course = ({ match }) => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await getCourseById(match.params.id);
      if (data) {
        setData(data.data);
      }
    })();
  }, [match.params.id]);
  const hashCode = (s = "") =>
    s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  const colors = [
    ["#01579b", "#03a9f4"],
    ["#880e4f", "#e91e63"],
    ["#4a148c", "#673ab7"],
    ["#b71c1c", "#f44336"],
    ["#006064", "#00bcd4"],
    ["#e65100", "#ff9800"],
    ["#004d40", "#009688"],
    ["#bf360c", "#ff5722"],
    ["#1a237e", "#3f51b5"],
    ["#1b5e20", "#4caf50"]
  ];
  const subscribe = async () => {
    try {
      setMessage({});
      if (!(name && email)) throw { message: "Please enter valid details!" };
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(mailformat)) throw { message: "Invalid Email address!" };

      const resp = await axios.post(
        `/api/courses/${match.params.id}/subscribers`,
        { name, email }
      );
      if (resp.data.err) throw { message: resp.data.err };
      setMessage({
        isError: false,
        message: `Thanks for subscribing to the course ${name}, Email Verification link has been sent to ${email}, please verify your email to access the content!`
      });
      setEmail("");
      setName("");
    } catch (error) {
      console.log(error);
      setMessage({
        isError: true,
        message: error.message
      });
    }
  };
  return (
    <div>
      {console.log(data)}
      <nav
        style={{
          background: colors[hashCode(data.author) % 10][1]
        }}
      >
        <div
          style={{
            fontSize: "30px",
            color: "black",
            padding: "15px"
          }}
        >
          {data.title}
        </div>
      </nav>
      <div className="course_info">
        <p>
          Course Author : <strong>{data.author}</strong>
        </p>
        <p>
          Duration : <strong>{data.duration}</strong> Days
        </p>
        <p>
          Subscribers: <strong>{data.subscribers}</strong>
        </p>
        <p>
          Published On:{" "}
          <strong>
            {data.createdAt
              ? new Date(
                  +data.createdAt.slice(0, 4),
                  +data.createdAt.slice(5, 7) - 1,
                  +data.createdAt.slice(8, 10)
                )
                  .toDateString()
                  .slice(4)
              : ""}
          </strong>
        </p>
        <p>{data.description || "No Description Available!"}</p>
        {console.log(
          data.titles
        ) /* {data && data.titles.map((title) => <p>Day 1 : {title}</p>)} */}
      </div>
      {message.message && (
        <div
          className="message-box"
          style={{
            color: "black",
            padding: "15px",
            fontSize: "20px",
            background: message.isError ? "#f44336" : "#4CAF50"
          }}
        >
          {message.message}
        </div>
      )}
      <div>
        <form className="subs_form">
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            style={{
              marginBottom: "2px"
            }}
          ></input>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
          <submit
            style={{
              textAlign: "center",
              cursor: "pointer",
              padding: "20px",
              background: colors[hashCode(data.author) % 10][1],
              color: "black",
              fontSize: "25px"
            }}
            onClick={(e) => {
              e.preventDefault();
              subscribe();
            }}
          >
            Subscribe
          </submit>
        </form>
      </div>
    </div>
  );
};
export default Course;
