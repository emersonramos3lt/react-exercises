import ComponentC from "./ComponentC"

function ComponentB() {

    return(
        <div className="box">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

// Importar o arquivo ComponentC para podermos colocar ele dentro do return() do ComponentB

export default ComponentB