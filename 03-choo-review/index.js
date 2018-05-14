const choo = require('choo');
const app = choo();

const modelYard = require('./models/yard');

const viewMain = require('./pages/home');

// global dependencies
require('./assets/styles/global');

// models
app.model(modelYard);

// routes
app.router((route) => [route('/', viewMain)]);

// run app
const tree = app.start();
document.body.appendChild(tree);
