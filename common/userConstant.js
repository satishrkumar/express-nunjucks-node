function postUserRequest(req) {
  return {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    country: req.body.country,
  };
}
exports.postUserRequest = postUserRequest;
function newUser() {
  return {
    name: "",
    age: "",
    gender: "",
    country: "",
  };
}
exports.newUser = newUser;
