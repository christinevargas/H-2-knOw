import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="site-title">H | 2 | knOw</h1>
          <p className="site-description">
            Know exactly when to water your plants and become the best plant
            parent. When you know, they grow.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
