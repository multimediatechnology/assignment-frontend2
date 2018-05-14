const html = require("choo/html");
const emoji = require("node-emoji");

module.exports = unit => emoji.get(unit);
