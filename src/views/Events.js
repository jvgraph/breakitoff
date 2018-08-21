import React, { Component } from "react";
import PropTypes from "prop-types";
import data from "../data/data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Event = ({ handleEventClick }) => {
  return data.map(event => (
    <li className="event" key={event.id}>
      <div onClick={() => handleEventClick(event.id)} className="event--title">
        {event.title}
      </div>
    </li>
  ));
};

Event.propTypes = {
  handleEventClick: PropTypes.func,
  eventId: PropTypes.number
};
// title: "Sound The Groove!",
// id: 1,
// date: "Friday, August 24th, 2018",
// time: "6:00PM",
// place: "The Delancey Underground",
// address: "168 Delancet St, New York, NY 10002",
// ticket: 15,
// age: 21,
// image: "./images/breakitoff.jpg"
const EventModal = ({ eventId, handleCloseModal }) => {
  return data.filter(event => event.id === eventId).map(event => (
    <div className="event--modal-container" key={event.id}>
      {console.log("event id ", eventId)}
      <div className="modal-content">
        <button className="close-modal" onClick={() => handleCloseModal()}>
          X
        </button>
        <img src={event.image} alt={event.title} draggable={false} />
        <div className="event--title">{event.title}</div>
        <div className="event--date">{`${event.date} @${event.time}`}</div>
        <div className="event--location">{`@ ${event.place}`}</div>
        <div className="event--address">{`@ ${event.address}`}</div>
      </div>
    </div>
  ));
};

EventModal.propTypes = {
  eventId: PropTypes.number,
  handleCloseModal: PropTypes.func
};

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      eventId: null
    };
  }

  handleEventClick = id => {
    if (this.state.eventId !== id) {
      this.setState({
        eventId: id,
        modal: true
      });
    } else {
      this.setState({
        eventId: null,
        modal: false
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      modal: false,
      eventId: null
    });
  };

  renderEvents = () => {
    return (
      <Event
        handleEventClick={this.handleEventClick}
        eventId={this.state.eventId}
      />
    );
  };

  render() {
    return (
      <div className={`events page`}>
        <h1>Break it off Events</h1>
        <ul className="event--list">{this.renderEvents()}</ul>
        <TransitionGroup
          className={`event--modal${
            this.state.modal === true ? " event--modal-open" : ""
          }`}
        >
          {this.state.eventId !== null && (
            <CSSTransition
              classNames="modal-fade"
              key={this.state.eventId}
              timeout={300}
            >
              <EventModal
                eventId={this.state.eventId}
                handleCloseModal={this.handleCloseModal}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default Events;
