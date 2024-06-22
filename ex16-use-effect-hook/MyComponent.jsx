// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// This state of value

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts




/*
import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0); // useState define valor padrão

    useEffect(() => {
        document.title = `Count: ${count}`
    }); // useEffect irá mudar o title da pagina, onde sempre que count ganhar um novo número ele irá atualizar a página para o atual número de count

    function addCount() {
        setCount(c => c + 1); // Add 1 a count
    } // c = count

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </div>
    );
}

export default MyComponent
*/














/*
import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0); // useState define valor padrão
    const [color, setColor] = useState("green");

    useEffect(() => {
    document.title = `Count: ${count} Color ${color}`; }, [count, color]);
        

    function addCount() {
        setCount(c => c + 1); // Add 1 a count
    } // c = count

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    } // Troca a cor do <p> de green para red

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>

            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>

            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent

// Mesmo que useEffect seja retirado, o código ainda irá funcionar, fazendo com que sempre o título mude, mostrando se é green ou red, e o atual número de count

// O uso do useEffect é bom, para manter o código organizado
*/







import React, {useState, useEffect} from "react";

function MyComponent() {

    // Estas const irá mostrar o tamanho da altura e largura da tela, que será chamada na tag <p> que irá mostrar os respectivos valores

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADD");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]); // Sempre que os valores de width e height mudar no <p> ele irá atualizar o title

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}</p>
        </>
    ); 
} // O que está dentro da {} e {} do <p> são as const

export default MyComponent;