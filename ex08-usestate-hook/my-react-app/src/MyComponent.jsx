/*
import React, {useState} from 'react'; // import useState

function MyComponent() {

    // Se deixarmos os () do (useState) vazio, e não definir um valor, ele irá pegar o valor do (setName) definido na (const)

    let [name, setName] = useState("Guest"); // O valor da (let) pode ser mudado,e da (const) é um valor fixadamente definido, então use (let)

    const updateName = () => {
       setName("Spongebob")
    } // (setName) foi criado na (let)

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    );

    // {updateName} nome da const

} // (let) pega (name) e (setName), e a (const) define o valor de (setName) dentro dos ()

export default MyComponent
*/










import React, {useState} from 'react';

function MyComponent() {
    // Tudo dentro dos () em useState são os valores padrões, antes de sofrerem qualquer mudanças

    const [name, setName] = useState("Guest"); // "Guest" = valor padrão
    const [age, setAge] = useState(0); // 0 = Valor padrão
    const [isEmployed, setIsEmployed] = useState(false); // useState() = valor padrão o que está dentro dos ()

    const updateName = () => {
        setName("Spongebob");
    }

    const incremetAge = () => {
        setAge(age + 1);
    } // Irá add 1 há age sempre que button for clicado

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    } // Quando for clicado, irá mudar os status de "Yes" ou "No"

    return(
        <div> 
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incremetAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p> 
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>

    ); // Na tag p usamos "Yes" = true e "No" = false 
} 

// updateName, incremetAge e toggleEmployedStatus = São os nomes das const

export default MyComponent