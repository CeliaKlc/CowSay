const infoPerso = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text:
      "Hello i'm " + infoPerso.name + " from the campus of " + infoPerso.campus,
    e: "oO",
    T: "U ",
  })
);
