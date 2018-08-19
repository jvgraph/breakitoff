import React, { Component } from "react";

class Events extends Component {
  render() {
    return (
      <div className={`events`}>
        <h1>Break it off Events</h1>
        <ul className="event--list">
          <li className="event">
            <div className="event--title">title</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Events;
