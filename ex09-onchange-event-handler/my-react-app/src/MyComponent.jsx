// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes


import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest"); // Guest = valor padrão
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    } // Definimos o event, que irá mudar value

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return(
  
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label><br/>

            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div> 
        
        // onChange irá possibilitar que o texto seja mudado, ao digitar no input, que saíra o novo valor no <p>

        // o valor (name) está criado na const

    );
}

// Criamos a string (name) em const que irá ter o seu valor mudado ao digitar no input, com o uso de (onChange)

// setName(event.target.value) = Quando a function que está armazenado setName, for chamado no (input) por meio de (onChange={}) ele irá adicionar um (event) com o (target) no (value)

// (event) é criado nos () da function.
// Ex: function handleQuantityChange(event)

export default MyComponent
