const request = require("supertest");
const should = require("should");
const app = require("../app");

const isValidCountry = function (res) {
  res.text.indexOf(`<option value="United Kingdom">United Kingdom</option>`).should.be.aboveOrEqual(0);
};
const isAgeValid = function (res) {
  res.text.indexOf(`Age should not be blank`).should.be.aboveOrEqual(0);
};
const isGenderValid = function (res) {
  res.text.indexOf(`Gender should not be blank`).should.be.aboveOrEqual(0);
};
const isCountryValid = function (res) {
  res.text.indexOf(`Country should not be blank`).should.be.aboveOrEqual(0);
};
const isNameValid = function (res) {
  res.text.indexOf(`Name should not be blank`).should.be.aboveOrEqual(0);
};
describe("GET applicaion user form", function () {
  it("respond should be type html", function (done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});

describe("GET country from given rest point", function () {
  it("respond should have country United Kingdom", function (done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /html/)
      .expect(isValidCountry)
      .expect(200, done);
  });
});

describe("Post Create Without With Blank User Details", function () {
  it("respond should have all validation errors", function (done) {
    request(app)
      .post("/apply")
      .send()
      .set("Accept", "application/json")
      .expect("Content-Type", /html/)
      .expect(isValidCountry)
      .expect(isAgeValid)
      .expect(isNameValid)
      .expect(isCountryValid)
      .expect(isGenderValid)
      .expect(200, done);
  });
});
