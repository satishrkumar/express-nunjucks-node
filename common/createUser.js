const fetch = require("node-fetch");

function createUser(userPayload) {
  fetch("http://localhost:9081/user/create", {
    method: "POST",
    body: JSON.stringify(userPayload),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
exports.createUser = createUser;
