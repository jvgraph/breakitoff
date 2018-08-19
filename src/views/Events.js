import React, { Component } from "react";
import data from "../data/data";

const Event = () => {
  return data.map(event => (
    <li className="event" key={event.id}>
      <div className="event--title">{event.title}</div>
    </li>
  ));
};
class Events extends Component {
  renderEvents = () => {
    return <Event data={data} />;
  };
  render() {
    return (
      <div className={`events page`}>
        <h1>Break it off Events</h1>
        <ul className="event--list">{this.renderEvents()}</ul>
      </div>
    );
  }
}

export default Events;
