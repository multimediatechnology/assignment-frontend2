const choo = require('choo');
const html = require('choo/html');
const emoji = require('node-emoji');
const css = require('sheetify');
const app = choo();

css('bootstrap');

const styles = css`
  h1 {
    color: blue;
  }
`;

const wagon = 'railway_car';

// steam_locomotive
app.model({
  state: {
    wagons: [],
    gleis: []
  },
  reducers: {
    addWagon: (data, state) => ({ wagons: [...state.wagons, wagon] }),
    moveWagon: (data, state) => {
      const add = [];

      if (state.wagons.length > 1) {
        state.wagons.pop();
        add.push(wagon);
      }

      if (state.gleis.length === 0) {
        add.push('steam_locomotive');
      }

      return Object.assign(state, {
        wagons: state.wagons,
        gleis: [...state.gleis, ...add]
      });
    }
  }
});

const mainView = (state, prev, send) => html`
  <main class=${styles}>
    <h1>Rangierbahnhof</h1>
    <hr>
    <button onclick=${() =>
      send('addWagon')} class="btn btn-primary">Wagen hinzufügen</button>
    <button onclick=${() =>
      send('moveWagon')} class="btn btn-danger">Rangieren</button>
    <div class="gleis">
      ${state.wagons.map((v) => emoji.get(v))}
    </div>
    <div class="gleis">
      ${state.gleis.map((v) => emoji.get(v))}
    </div>
  </main>
`;

app.router((route) => [route('/', mainView)]);

const tree = app.start();
document.body.appendChild(tree);
