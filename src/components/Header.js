import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
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
    );
  }
}
