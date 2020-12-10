const fetch = require("node-fetch");

function goToHome(res, userPayload, errors) {
  var url = "https://restcountries.eu/rest/v1/region/Europe";
  fetch(url)
    .then((res) => res.json())
    .then((countries) => {
      res.render("index.html", {
        countries,
        userPayload,
        errors,
      });
    })
    .catch((err) => {
      res.send(err);
    });
}
exports.goToHome = goToHome;
