const API_KEY = process.env.REACT_APP_REGISTER_API_KEY;

let apiData;

async function getMockAPI() {
  fetch(`${API_KEY}/register`)
    .then((response) => response.json())
    .then((data) => (apiData = data))
    .then(() => console.log(apiData));
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
