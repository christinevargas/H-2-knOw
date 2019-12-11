import React, { Component } from "react";
import Calendar from "react-calendar";
import AllPlants from "./AllPlants";
import { Jumbotron, Container } from "react-bootstrap";

export default class CalendarComponent extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <>
        <div>
          <Jumbotron fluid>
            <Container>
              <h1 className="site-title">H | 2 | knOw</h1>
              <p className="site-description">
                Know exactly when to water your plants and become the best plant
                parent.
              </p>
            </Container>
          </Jumbotron>
        </div>
        <hr />
        <h1 className="calendar-title">Schedule</h1>
        <div className="calendar-container">
          <Calendar
            className="calendar"
            onChange={this.onChange}
            value={this.state.date}
            calendarType="US"
          />
        </div>
        <div>
          <AllPlants />
        </div>
      </>
    );
  }
}
