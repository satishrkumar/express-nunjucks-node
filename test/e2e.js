const request = require("supertest");
const should = require("should");
const app = require("../app");
const path = require("path");

var isResponseHasWelcomeMessage = function (res) {
  res.text
    .indexOf(`Runi Thankyou for applying to this useful goverment service`)
    .should.be.aboveOrEqual(0);
};

describe("Post Create User", function () {
  it("User should get created", function (done) {
    request(app)
      .post("/apply")
      .type("form")
      .send("name=Runi")
      .send("age=39")
      .send("country=United Kingdom")
      .send("gender=Female")
      .expect(isResponseHasWelcomeMessage)
      .expect(200, done);
  });
});
