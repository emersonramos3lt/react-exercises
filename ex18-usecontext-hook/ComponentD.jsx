import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentD() {

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
} 
// 1. Importar UserContext, para permitir compartilhar valores entre varios componentes

// 2. Criar a const user, com o valor useContext(UserContext);

// 3. Chamar ${user} na tag <h2>, onde irá mostrar o valor da const do ComponentA

export default ComponentD