import React, { useState } from 'react';

const CarPriceForm = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [price, setPrice] = useState('');

  const handleCarChange = (e) => {
    const car = e.target.value;
    setSelectedCar(car);
    let carPrice;

    switch (car) {
      case 'BMW':
        carPrice = '40 000';
        break;
      case 'Mercedes':
        carPrice = '50 000';
        break;
      case 'Audi':
        carPrice = '45 000';
        break;
      default:
        carPrice = '';
    }

    setPrice(carPrice);
  };

  return (
    <div>
      <h1>Car Price Form</h1>
      <form>
        <label>
          Select a car:
          <select value={selectedCar} onChange={handleCarChange}>
            <option value="">Select...</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </label>
      </form>
      {price && <p>The price of the selected car is: {price}</p>}
    </div>
  );
};

export default CarPriceForm;