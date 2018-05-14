const html = require("choo/html");

function trackStatus(track) {
  if (track.queue.length > 1 && track.queue.length < track.size + 1) {
    return html`<p class="text-warning">Ready to be scheduled but queue is not full!</p>`;
  } else if (track.queue.length === track.size + 1) {
    return html`<p class="text-success">Ready to be scheduled. Maximum efficiency.</p>`;
  }
}

module.exports = (state, idx, send) => {
  const track = state.yard.tracks[idx];
  return html`
    <div class="track ${
      idx === state.yard.selectedTrack ? "track--active" : ""
    }">
      <h3>Track</h3>
      ${trackStatus(track)}
      <ul>${track.queue.map(o => o)}</ul>
    </div>
  `;
};
