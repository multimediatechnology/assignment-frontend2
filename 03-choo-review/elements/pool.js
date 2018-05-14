const html = require("choo/html");
const emoji = require("node-emoji");

const unit = require('./unit');

module.exports = (list, send) => {
  return html`
    <div>
      <h3>Pool</h2>
      <ul>${list.map(unit => html`<li>${unit}</li>`)}</ul>
    </div>
  `;
};
