import React, { Component } from "react";

class EventsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    const url =
      "https://www.eventbriteapi.com/v3/organizations/416793458295/events/?token=VX7OEYIVZAMNFZG44SZ5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ events: data.events });
  }

  render() {
    const { events } = this.state;
    let eventList = events.map(element => {
      return (
        <div className="event-box">
          <div className="eventTitle">{element.name.text}</div>
          <img
            src={element.logo.original.url}
            alt="event-image"
            className="event-image"
          ></img>
          <div>{element.description.text}</div>
          <a href={element.url}>Check ticket</a>
        </div>
      );
    });

    console.log("events :", events);
    return (
      <div>
        {" "}
        <div className="mission-box">Codemates Events</div>
        <div>{eventList}</div>
      </div>
    );
  }
}

export default EventsMain;
