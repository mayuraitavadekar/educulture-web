import React from "react";
import Base from "../core/Base";
import AdminNavbar from "./AdminNavbar";

const AdminDashBoard = ({ children }) => {
  return (
    <div>
      <Base>
        <AdminNavbar />
      </Base>
    </div>
  );
};

export default AdminDashBoard;
