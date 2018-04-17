import $ from 'jquery';
import tpl from '../templates/drivers.hbs';

/*
export default async function drivers() {
  const driversStream = await fetch('http://ergast.com/api/f1/drivers.json');
  const drivers = await driversStream.json();

  tpl({drivers});
}
*/

function process(data) {
  console.log(data.MRData.DriverTable.Drivers);
  return data.MRData.DriverTable.Drivers;
}

export default function drivers() {
  const $app = $('#app');
  fetch('http://ergast.com/api/f1/drivers.json')
    .then(res => res.json())
    .then(process)
    .then(data => tpl({drivers: data}))
    .then(html => $app.html(html));
}
