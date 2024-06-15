import React, { useState } from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);

    const [carYear, setCarYear] = useState(new Date().getFullYear());

    const [carMake, setCarMake] = useState("");

    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    } // c = car É uma prática comum substituir toda a palavra apenas pela sua letra inicial.

    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    } // Quando <li> for clicado irá remover o texto

    // c = car 
    // i = index

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

return(
    <div>
        <h2>List of Car Objects</h2>

        <ul>
        {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange}/><br/>

        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'/><br/>

        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model'/><br/>

        <button onClick={handleAddCar}>Add Car</button>

    </div>
);
}

// Quando <button> for clicado ele irá mostrar as informações colocada dentro dos input, chamando a function(handleAddCar) e que será mostrada em <li>

export default MyComponent;

// As functions (handleYearChange) (handleMakeChange) e (handleModelChange) são chamados no <input> dentro do onChange

// onChange() possibilita que os valores sejam trocados em tempo real, por meio da ajuda das functions. Ex: setCarModel(event.target.value) que é colocado dentro da function