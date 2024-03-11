// Forms by export data in Node.js
this.club = "Vasco da Gama";
exports.clubGRA = "Liverpool";
module.exports.clubESP = "Real Madrid";

// Normal form by export data in Node.js
module.exports = {
  clubBRA: "Vasco da Gama",
  getClub() {
    return this.clubBRA;
  },
};
