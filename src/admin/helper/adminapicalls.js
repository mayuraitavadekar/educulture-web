import { API } from "../../backend";

export const createNewTest = (data) => {
  return fetch(`${API}/create/test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error in fetch register."));
};
