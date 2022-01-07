// const API_KEY = process.env.REACT_APP_REGISTER_API_KEY;
const API_KEY = "https://61c4e388f1af4a0017d9984f.mockapi.io";

let apiData;

async function getMockAPI() {
  fetch(`${API_KEY}/register`)
    .then((response) => response.json())
    .then((data) => (apiData = data));
}

async function postMockAPI(username, email, password) {
  fetch(`${API_KEY}/register`, {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}

export { getMockAPI, postMockAPI, apiData };
