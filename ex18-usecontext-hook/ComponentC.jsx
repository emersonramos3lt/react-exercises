import React, {useContext} from 'react';
import { UserContext } from './ComponentA.jsx';
import ComponentD from "./ComponentD"

function ComponentC() {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
} 

// Importar o ComponentD para ser usado no return() do ComponentC

// 1. Importar useContext para podermos pegar valores de outros arquivos

// 2. Importar UserContext do ComponentA, que é a const que contém o valor createContext() que é importado no ComponentA, o createContext() faz ser possível pegar os valores armazenados no ComponentA e ser usado nos outros arquivos

// 3. criar a const user, e usar na tag <h2> ${user}


export default ComponentC