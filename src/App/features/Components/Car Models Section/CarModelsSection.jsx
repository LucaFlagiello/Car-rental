import React, { useState } from "react";
import cars from "../../Cars Data/CarsData";
import CarButton from "./CarButton";
import './car-models.css'

const CarModelsSection = () => {
  const [selectedCarId, setSelectedCarId] = useState(cars[0].id);
  const [carImg, setCarImg] = useState(cars[0].img);
  const [carPrice, setCarPrice] = useState(cars[0].price);
  const [carModel, setCarModel] = useState(cars[0].model);
  const [carMark, setCarMark] = useState(cars[0].mark);
  const [carYear, setCarYear] = useState(cars[0].year);
  const [carDoors, setCarDoors] = useState(cars[0].Doors);
  const [carAc, setCarAc] = useState(cars[0].AC);
  const [carTrasmission, setCarTrasmission] = useState(cars[0].transmission);
  const [carFuel, setCarFuel] = useState(cars[0].fuel);

  const handleCarSelect = (car) => {
    setSelectedCarId(car.id);
    setCarImg(car.img);
    setCarPrice(car.price);
    setCarModel(car.model);
    setCarMark(car.mark);
    setCarYear(car.year);
    setCarDoors(car.Doors);
    setCarAc(car.AC);
    setCarTrasmission(car.transmission);
    setCarFuel(car.fuel);
  };

  return (
    <section className="car-models-section">
      <div className="pick-car-box-text">
        <h3>Vehicle Models</h3>
        <h2>Our rental fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
        </p>
      </div>

      <div className="pick-car-elements-container">
        <div className="pick-btns-container">
          {cars.map((car) => (
            <CarButton
              key={car.id}
              isSelected={car.id === selectedCarId}
              onSelect={handleCarSelect}
              car={car}
            />
          ))}
        </div>

        <div className="car-img-information-container">    
          <img className="car-img" src={carImg} alt="car-img"/>

          <aside className="box-car-information">
            <div className="car-information-table">
              <div className="car-price-container">
                <span className="car-price">${carPrice}</span> / rent per day
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Model</span>
                <span>{carModel}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Mark</span>
                <span>{carMark}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Year</span>
                <span>{carYear}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Doors</span>
                <span>{carDoors}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">AC</span>
                <span>{carAc}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Transmission</span>
                <span>{carTrasmission}</span>
              </div>

              <div className="car-information-row">
                <span className="left-span-row">Fuel</span>
                <span>{carFuel}</span>
              </div>
            </div>
          
            <button className="reserve-btn">RESERVE NOW</button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CarModelsSection;