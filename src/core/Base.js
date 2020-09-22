import React from "react";
import Menu from "./Menu";

const Base = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="text-center children">{children}</div>
      <footer className="footer fixed-bottom">
        <div>
          <p className="text-white bg-dark text-center">
            Copyright © 2020 Educulture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Base;
