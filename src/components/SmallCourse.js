import React, { Component } from "react";
class SmallCourse extends Component {
  constructor(props) {
    super(props);
    this.colors = [
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
  }
  render() {
    return (
      <div
        className="course"
        style={{
          background: this.colors[this.props.col][0]
        }}
      >
        <div
          style={{
            fontSize: `${22}px`,
            paddingBottom: `${5}px`,
            color: "white"
          }}
        >
          {this.props.title}
        </div>
        <div
          className="info"
          style={{
            background: this.colors[this.props.col][1]
          }}
        >
          <div>By {this.props.author}</div>
          <div>
            Duration : <strong>{this.props.duration}</strong> Days
          </div>
          <div>
            Subscribers : <strong>{this.props.subscribers}</strong>{" "}
          </div>
          <div>
            Published on : <strong>{this.props.published}</strong>
          </div>
          <div>
            {this.props.description.length > 100
              ? this.props.description.slice(0, 100) + " ..."
              : this.props.description + ""}
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCourse;
