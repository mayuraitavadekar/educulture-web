import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Image,
  Modal,
  Button,
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";

import {
  login,
  register,
  isAuthenticated,
  authenticate,
  logout,
} from "./helper/coreapicalls";

import validator from "validator";

const Menu = () => {
  const [modalShow, setModalShow] = React.useState(false);

  //TODO: MODAL
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="login">
              <Login />
            </Tab>
            <Tab eventKey="register" title="register">
              <Register />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  //TODO: LOGIN
  const Login = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
      didRedirect: "",
    });

    const { email, password, didRedirect } = values;

    const handleChange = (name) => (event) => {
      setValues({ ...values, error: "", [name]: event.target.value });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      // validate email

      if (
        validator.isEmail(email, { domain_specific_validation: true }) !== true
      ) {
        alert("invalid email address.");
      } else {
        // validation is successfull, send the data to server side for signup
        login({ email, password })
          .then((data) => {
            if (data.error) {
              setModalShow(false);
              alert(
                "Error in Login. If you have not registered, please register."
              );
            } else {
              setModalShow(false);
              authenticate(data, () => {
                setValues({
                  ...values,
                  email: "",
                  password: "",
                  didRedirect: true,
                });
              });

              window.location.reload(false);
            }
          })
          .catch((err) => console.log("error in login"));
      }
    };

    const performRedirect = () => {
      if (didRedirect) {
        return <Redirect to="/" />;
      }
    };

    const loginForm = () => {
      return (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange("email")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange("password")}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={onSubmit}
            className="text-center"
          >
            Submit
          </Button>
        </Form>
      );
    };

    return (
      <div>
        {loginForm()}
        {performRedirect()}
      </div>
    );
  };

  //TODO: REGISTER
  const Register = () => {
    const [values, setValues] = useState({
      name: "",
      email: "",
      mobile: "",
    });

    const { name, email, mobile } = values;

    const handleChange = (name) => (event) => {
      setValues({ ...values, error: "", [name]: event.target.value });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      // validate name, email and password
      let fullname = name.split(" ");

      if (
        fullname.length !== 2 ||
        validator.isAlpha(fullname[0]) !== true ||
        validator.isAlpha(fullname[1]) !== true
      ) {
        alert("invalid firstname<space>lastname");
      }

      if (
        validator.isEmail(email, { domain_specific_validation: true }) !== true
      ) {
        alert("invalid email address.");
      }

      if (
        mobile.length !== 10 &&
        validator.isNumeric(mobile, { no_symbols: true }) !== true
      ) {
        alert("enter valid 10 digit mobile number.");
      } else {
        // validation is successfull, send the data to server side for signup
        register({ name, email, mobile })
          .then((data) => {
            if (data.error) {
              console.log("error!");
              setModalShow(false);
              alert(
                "Error in Registration. If you have already registered, please login."
              );
            } else {
              setModalShow(false);
              alert("Login code has been sent on your email id.");
              setValues({
                ...values,
                name: "",
                email: "",
                mobile: "",
              });
            }
          })
          .catch((err) => console.log("error in register."));
      }
    };

    const registerForm = () => {
      return (
        <Form>
          <Form.Group controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Firstname<space>Lastname"
              onChange={handleChange("name")}
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={handleChange("email")}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              onChange={handleChange("mobile")}
              value={mobile}
            />
          </Form.Group>

          <Form.Text style={{ color: "blue" }} className="mb-4">
            [After registration, please check your email account for the
            password. If you have not received password, wait for some time and
            try again. For any other error contact us on
            educulture.edtech@gmail.com]
          </Form.Text>

          <Button variant="primary" onClick={onSubmit} type="submit">
            Submit
          </Button>
        </Form>
      );
    };

    return <div>{registerForm()}</div>;
  };

  //TODO: menu return
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light  ">
        <Navbar.Brand href="/">
          <Image
            width="200px"
            src={require("../assets/images/logo.png")}
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/availabletests">
              Online test series
            </Nav.Link>
            {!isAuthenticated() && (
              <Nav.Link eventKey={3} onClick={() => setModalShow(true)}>
                Login/Register
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {isAuthenticated() && isAuthenticated().user.role !== 1 && (
              <Nav.Link as={Link} to="/">
                User Account
              </Nav.Link>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <Nav.Link eventKey={2} as={Link} to="/admin">
                Admin Dashboard
              </Nav.Link>
            )}

            {isAuthenticated() && (
              <Nav.Link
                eventKey={3}
                as={Link}
                onClick={() => {
                  logout(() => {
                    window.location.reload(false);
                  });
                }}
              >
                Log out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Menu;
