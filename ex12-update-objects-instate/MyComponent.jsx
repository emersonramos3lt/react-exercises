/*
import React, { useState } from 'react';

function MyComponent() {

    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    return(
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year}/><br/>

        <input type="text" value={car.make}/><br/>

        <input type="text" value={car.model}/><br/>
    </div> 
    );
} // No <p> colocamos a const car, e seus respectivos valores definidos na const, como o year, make e model
// Para chamar os valores = car.year, car.make, car.model


export default MyComponent
*/








// -------- IMPLEMENTANDO O onChange() ----------------

import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"}); // No useState definimos os valores padrão de year, make, model


    // Criar function para onChange()

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    } // Possibilita a troca dos valores do year no input, na const car, que está representado pela letra c

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    } // Possibilita a troca de valores

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    } // Possibilita a troca de valores


    return (
        <div>

        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>

        </div>
    );
} // Todas as function criadas são chamadas no onChange em input para funcionar

export default MyComponent