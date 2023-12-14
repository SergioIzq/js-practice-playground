"use strict";

var _module = require("./module.mjs");
var turn = (0, _module.ballThrow)();
turn.then(function (hits) {
  if (hits == 9) {
    alert("Strike!!! XXX");
  } else {
    alert("Hemos tirado ".concat(hits, " bolos"));
  }
}, function (fail) {
  alert("No has tirado nada! ".concat(fail));
});
