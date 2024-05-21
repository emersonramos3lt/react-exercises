function Food() {

    const food1 = "orange";
    const food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2}</li>
        </ul> // Se caso você queira chamar alguma const por exemplo aqui food1 e food2, você pode escrever dentro das {nome da const}, que aqui será {food1}
    );
}

export default Food