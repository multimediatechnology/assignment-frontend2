const html = require("choo/html");

const interlock = require("../elements/interlock");
const pool = require("../elements/pool");
const track = require("../elements/track");

module.exports = (state, prev, send) => html`
    <main class="container">
        <h1>Railway Yard</h1>
        <hr>
        <div class="row">
          <div class="col-6">
            ${interlock(state, prev, send)}
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col">
                <h2>Wagons</h2>
                ${pool(state.yard.wagons, send)}
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Locomotives</h2>
                ${pool(state.yard.locomotives, send)}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Tracks</h2>
            ${state.yard.tracks.map((t, idx) => track(state, idx, send))}
          </div>
        </div>
    </main>
`;
