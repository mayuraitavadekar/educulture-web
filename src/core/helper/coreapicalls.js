import { API } from "../../backend";

export const register = (userData) => {
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error in fetch register."));
};

export const login = (userData) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error in fetch login."));
};

export const logout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userData");
    next();
  }
};

export const authenticate = (userData, next) => {
  localStorage.setItem("userData", JSON.stringify(userData));
  next();
};

export const isAuthenticated = () => {
  if (localStorage.getItem("userData")) {
    let data = JSON.parse(localStorage.getItem("userData"));
    return data;
  } else {
    // user data is not present
    return false;
  }
};
