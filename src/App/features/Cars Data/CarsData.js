import audi from '../Assets/audia1.d038cf70b700e34e607a.jpg';
import golf6 from '../Assets/golf6.595c0bbfc7ce2e50aa05.jpg';
import camry from '../Assets/toyotacamry.3d493a56558c50b677cc.jpg';
import bmw from '../Assets/bmw320.84ab73b0c9133418f907.jpg';
import mercedes from '../Assets/benz.0a6153731a2c1a68054a.jpg';
import passat from '../Assets/passatcc.bd82bd1deac8c11e3c4d.jpg';
import audiModelPage from '../Assets/audiA1-models-page.png'
import golf6ModelPage from '../Assets/golf6-models-page.png'
import camryModelPage from '../Assets/toyota-models-page.png'
import bmwModelPage from '../Assets/bmw-models-page.png'
import mercedesModelPage from '../Assets/mercedesBenz-models-page.png'
import passatModelPage from '../Assets/passat-model-pages.png'

const cars = [
  {
    id: 1,
    price: '45',
    name: 'Audi A1 S-Line',
    modelsPageName: 'Audi A1',
    model: 'Audi',
    img: audi,
    modelsPageImg: audiModelPage,
    mark: 'A1',
    year: '2012',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: 2,
    price: '37',
    name: 'VW Golf 6',
    modelsPageName: 'Golf 6',
    model: 'Golf 6',
    img: golf6,
    modelsPageImg: golf6ModelPage,
    mark: 'Volkswagen',
    year: '2008',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 3,
    price: '30',
    name: 'Toyota Camry',
    modelsPageName: 'Toyota',
    model: 'Camry',
    img: camry,
    modelsPageImg: camryModelPage,
    mark: 'Toyota',
    year: '2006',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: 4,
    price: '35',
    name: 'BMW 320 ModernLine',
    modelsPageName: 'BMW 320',
    model: '320',
    img: bmw,
    modelsPageImg: bmwModelPage,
    mark: 'BMW',
    year: '2012',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 5,
    price: '50',
    name: 'Mercedes-Benz GLK',
    modelsPageName: 'Mercedes',
    model: 'Benz GLK',
    img: mercedes,
    modelsPageImg: mercedesModelPage,
    mark: 'Mercedes',
    year: '2006',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 6,
    price: '25',
    name: 'VW Passat CC',
    modelsPageName: 'VW Passat',
    model: 'Passat CC',
    img: passat,
    modelsPageImg: passatModelPage,
    mark: 'Volkswaken',
    year: '2008',
    Doors: '4/5',
    AC: 'Yes',
    transmission: 'Automatic',
    fuel: 'Gasoline',
  },
];

export default cars;
