// update function = A function passed as an argument to setState() usually ex. setYear(arrow function)

// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions

// Ex: setYear(y => y + 1)

import React, { useState } from 'react'; // Precisa importar useState

function MyComponent() {

    const [count, setCount] = useState(0); // Cria (count) e (setCount)

    function increment() {
        // setCount(count + 1); // Aumenta em 1, porém se repetirmos o mesmo código ele não irá mudar a quantidade, então precisamos usar a solucão em baixo

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        // Irá incrementar +3 toda vez que increment() for chamado

        setCount(c => c + 1); // Boa prática =>
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        // setCount(count - 1); // Diminui em 1

        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        // setCount(0); // Reseta a 0

        setCount(c => c = 0);
    }


    return(
        <div className='container'>

            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>

            <p>{count}</p>
        </div>
    ); // onClick={} chama a function
}

export default MyComponent