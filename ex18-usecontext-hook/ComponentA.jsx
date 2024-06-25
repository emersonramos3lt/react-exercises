import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Emerson");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value ={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
    );
} 
// Cada componente um do outro, algo que pode ser visto nas bordas criadas no CSS. Por exemplo B dentro de A e C dentro de B e D dentro de C

// 1. Importar import React, {useState, createContext} from 'react';

// 2. Criar export const UserContext = createContext();

// 3. Definir o valor de user dentro do useState() na const 
//     const [user, setUser] = useState("Emerson");

// 4. Colocar <ComponentB user={user}/> dentro da tag <UserContext.Provider value={user}>
/*
    EXEMPLO:

        <h2>{`Hello ${user}`}</h2> Irá mostrar o valor de user na tag <h2>

        <UserContext.Provider value ={user}>
            <ComponentB user={user}/>
        </UserContext.Provider>

*/

export default ComponentA