import React from "react";
import Menu from "./Menu";
import "../assets/css/base.css";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import HomeBackground from "../assets/images/home-blue.jpg";

const Home = () => {
  return (
    <div>
      <Menu />
      <Container
        fluid
        style={{
          background: `url(${HomeBackground})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="text-center">
          <Col>
            <h2>Our</h2>
            <h2>MPSC CSAT ऑनलाईन टेस्ट सिरीज (०१)</h2>
            <h2>Available Now.</h2>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row className="text-center">
          <Col>
            <Button as={Link} variant="danger" to="/availabletests">
              Click to know more
            </Button>
          </Col>
        </Row>
      </Container>

      <footer className="footer fixed-bottom">
        <p className="text-white bg-dark">
          <Row className="text-center">
            <Col>
              <p>visitor count: {0}</p>
            </Col>
            <Col>Copyright © 2020 Educulture. All rights reserved.</Col>
            <Col>designed any developed by educulture web team</Col>
          </Row>
        </p>
      </footer>
    </div>
  );
};

export default Home;
