import React from "react";
import "../assets/css/base.css";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import HomeBackground from "../assets/images/home-blue.jpg";
import Base from "./Base";

const Home = () => {
  return (
    <div>
      <Base>
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
      </Base>
    </div>
  );
};

export default Home;
