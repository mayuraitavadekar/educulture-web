import React, { useState } from "react";
import Base from "../core/Base";
import AdminNavbar from "./AdminNavbar";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import validator from "validator";
import { createNewTest } from "./helper/adminapicalls";

const CreateTest = () => {
  const [values, setValues] = useState({
    testname: "",
    description: "",
    testcode: "",
    maximummarks: "",
    negativemarks: "",
    timelimit: "",
    error: "",
  });

  const {
    testname,
    testcode,
    description,
    maximummarks,
    negativemarks,
    timelimit,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // validate everything
    if (
      validator.isNumeric(maximummarks) !== true ||
      validator.isNumeric(negativemarks) !== true ||
      validator.isNumeric(timelimit) !== true ||
      validator.isAlphanumeric(testcode) !== true
    ) {
      alert("please enter valid information to create new test.");
    } else {
      createNewTest({
        testname,
        testcode,
        description,
        maximummarks,
        negativemarks,
        timelimit,
      }).then((data) => {
        if (data.error) {
          setValues({
            ...values,
            testname: "",
            testcode: "",
            description: "",
            maximummarks: "",
            negativemarks: "",
            timelimit: "",
          });

          alert("error in to create new test. please try again.");
        } else {
          setValues({
            ...values,
            testname: "",
            testcode: "",
            description: "",
            maximummarks: "",
            negativemarks: "",
            timelimit: "",
          });

          alert("new test created successfully.");
        }
      });
    }
  };

  const onCancel = (event) => {
    setValues({
      ...values,
      testname: "",
      testcode: "",
      description: "",
      maximummarks: "",
      negativemarks: "",
      timelimit: "",
    });
  };

  return (
    <div>
      <Base>
        <AdminNavbar />
        <Container fluid className="mt-4 mb-4">
          <Form>
            <Form.Group>
              <Form.Label style={{ color: "green" }}>Name of Test</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter test name"
                onChange={handleChange("testname")}
                value={testname}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "green" }}>
                Description in short
              </Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="enter short info about test."
                onChange={handleChange("description")}
                value={description}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "green" }}>
                Unique Test Code
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter unique test code"
                onChange={handleChange("testcode")}
                value={testcode}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "green" }}>Maximum marks</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter maximum marks"
                onChange={handleChange("maximummarks")}
                value={maximummarks}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "green" }}>
                Negative marking (if any)
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="enter -1, -2 or 0"
                onChange={handleChange("negativemarks")}
                value={negativemarks}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "green" }}>
                Time in minutes
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="enter time limit in mins, e.g. 60, 120, 180"
                onChange={handleChange("timelimit")}
                value={timelimit}
              />
            </Form.Group>

            <Row>
              <Col>
                <Button variant="success" onClick={onSubmit}>
                  Submit
                </Button>
              </Col>
              <Col>
                <Button variant="danger" onClick={onCancel}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Base>
    </div>
  );
};

export default CreateTest;
