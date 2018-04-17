import $ from 'jquery';
import tpl from '../templates/driver.hbs';

function process(data) {
  return data.MRData.DriverTable.Drivers;
}

export default function detail() {
  const $app = $('#app');
console.log('test')
  const driver = fetch('http://ergast.com/api/f1/drivers/alonso.json');
  const constructors = fetch('http://ergast.com/api/f1/drivers/alonso/constructors.json');

  Promise
    .all([driver, constructors])
    .then(([driverStream, constructorsStream]) => {
      return Promise.all([driverStream.json(), constructorsStream.json()])
    })
    .then(([driver, constructors]) => {
      return [
        driver.MRData.DriverTable.Drivers[0],
        constructors.MRData.ConstructorTable.Constructors
      ]
      return [process(driver), process(constructors)]
    })
    .then(([driver, constructors]) => {
      console.log(driver, constructors);
    })
}
