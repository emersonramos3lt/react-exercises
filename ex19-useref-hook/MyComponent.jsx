// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // useRef ele também envia o valor de um elemento com suas propriedades

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "yellow";
        // Os outros input voltam a cor padrão
       inputRef2.current.style.backgroundColor = "";
       inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        // Os outros input voltam a cor padrão
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
     }

     function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        // Os outros input voltam a cor padrão
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
     }
 

    return(
        <div>
            <button onClick={handleClick1}>
            Click me 1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
            Click me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
            Click me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default MyComponent












/*
import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {

    const ref = useRef(0); // O valor dentro dos () é o valor padrão

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    }); // Mostra a mensagem no console

    function handleClick() {
        ref.current++;
        console.log(ref.current);
    } // Add mais +1 Quando <button> for clicado
    // Retorna os objetos em números 1 2 3...

    return(
        <button onClick={handleClick}>
            Click me!
        </button>
    ); 
}
// Sem o useRef() e usando o exemplo de baixo, iria acontecer sempre que <button> fosse clicado iria acionar a function handleClick() e mostrar "COMPONENT RENDERED"
// Porém com o uso do useRef, o "COMPONENT RENDERED" iria retornar no console, apenas 1 vez, e sempre que <button> fosse clicado novamente ele iria mostrar números crescentes então 1 2 3 4 5...

export default MyComponent
*/









/*
import React, {useState, useEffect, useRef} from 'react'; // Importar useRef

function MyComponent() {

    let [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }); // Sempre que handleClick acontecer irá imprimir no console

    function handleClick() {
        setNumber(n => n + 1);
    } // Add +1 quando <Button> for clicado

    return(
       
        <button onClick={handleClick}>
            Click me!
        </button>
       
    );

}

export default MyComponent
*/