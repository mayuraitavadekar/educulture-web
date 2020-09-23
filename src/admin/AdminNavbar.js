import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Col } from "react-bootstrap";

const currentTab = (history, path) => {
  if (history.location.pathname === path) return true;
  else return false;
};

const AdminNavbar = ({ history }) => {
  return (
    <div>
      <Nav fill variant="tabs">
        <Col>
          <Nav.Item>
            <Nav.Link
              as={Link}
              active={currentTab(history, "/admin/create/test")}
              to="/admin/create/test"
            >
              create new test
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav.Item>
            <Nav.Link
              as={Link}
              active={currentTab(history, "/admin/all/tests")}
              to="/admin/all/tests"
            >
              all tests
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    </div>
  );
};

export default withRouter(AdminNavbar);
