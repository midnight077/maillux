import React, { useState, useEffect } from "react";
import "./Course.css";
import { getCourseById } from "../utils/api";
const Course = ({ match }) => {
  const [data, setData] = useState({});
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
            color: "black"
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
      </div>
      <div>
        <form className="subs_form">
          <input
            type="text"
            placeholder="Enter your Name"
            style={{
              marginBottom: "2px"
            }}
          ></input>
          <input type="email" placeholder="Enter your email"></input>
          <submit
            style={{
              textAlign: "center",
              cursor: "pointer",
              padding: "20px",
              background: colors[hashCode(data.author) % 10][1],
              color: "black",
              fontSize: "25px"
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
