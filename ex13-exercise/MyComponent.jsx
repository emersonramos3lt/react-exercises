import React, { useState } from 'react';

function MyComponent() {

    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    function addItem() {
        const newItem = document.getElementById("itemInput").value;
        document.getElementById("itemInput").value = "";
        setItems(item => ([...item, newItem]));
    } // Add items ao serem digitados no input e <button> for clicado

    function removeItem(index) {
        setItems(items.filter((_, i) => i !== index))
    } // Remove items da lista quando <li> for clicado
    // i = item

    return( // Quando <li> for clicado irá chamar a function(removeItem)
        <div>
            <h1>Lista</h1>

            <ul>
                {items.map((item, index) =>
                <li key={index} onClick={() => removeItem(index)}>
                    {item}
                </li>
                )}
            </ul>

            <input type="text" id='itemInput' placeholder='Adicione um item'/>

            <button onClick={addItem}>Adicionar item</button> 
        </div>
    ); // <button> chama function(addItem) quando for clicado
}

export default MyComponent