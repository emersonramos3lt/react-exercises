import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    // IRÁ POSSIBILITAR ADICIONAR NOVOS ITENS A <li> POR MEIO DO INPUT
    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value = "";

        setFoods(f => ([...f, newFood]));
    } // f = foods

    function handleremoveFood(index) {

        // Irá remover itens, quando eles forem clicado, está funcion é chamada em onClick() no li

        setFoods(foods.filter((_, i) => i !== index));

    } // i = index

    return( // foods.map((food, index) => <li key={index}>{food}</li>) Irá mostrar as arrays definidas na const, e não será necessário criar mais <li>, o React criará automaticamente, sendo preciso apenas um <li>
        <div>
            <h2>List of Food</h2>

            <ul>
                {foods.map((food, index) => 
            <li 
                key={index} onClick={() => handleremoveFood(index)}>
                {food}
            </li>)}

            </ul>

            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    ); 
} // Em foods.map é preciso colocar index duas vezes, porque uma array fica em um índice

export default MyComponent