import React, {useState} from 'react';

function MyStore() {

    const [name, setName] = useState("Cliente");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");

    function nameChange(event) {
        setName(event.target.value);
    }

    function quantityChange(event) {
        setQuantity(event.target.value);
    }

    function paymentChange(event) {
        setPayment(event.target.value);
    }

    return(
        <div className='container'>

            <h1>Finalização da compra</h1>
            <p>Olá cliente, preencha os dados abaixo para finalizar a sua compra.</p>
            
        <input type="text" value={name} onChange={nameChange}/>
        <p>Nome: {name}</p>

        <input type="number" value={quantity} onChange={quantityChange}/>
        <p>Quantidade: {quantity}</p>

        <label>
            <input type="radio" value="Dinheiro" checked={payment === "Dinheiro"} onChange={paymentChange}/>
            Dinheiro
        </label>

        <label>
            <input type="radio" value="Cartão" checked={payment === "Cartão"} onChange={paymentChange}/>
            Cartão
        </label>

        </div>
    );
}

export default MyStore