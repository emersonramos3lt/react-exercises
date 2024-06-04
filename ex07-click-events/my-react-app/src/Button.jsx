/*
function Button() {

    const handleClick = () => console.log("OUCH"); // Mensagem a ser mostrada

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(<button onClick={handleClick2("Visitat")}>Click me</button>); // Quando o button tiver um click mostrará uma mensagem no console, definida na const acima

} // Podemos colocar ${name} no console.log, e definir o valor de name no return, Ex: handleClick("Seu Nome")

export default Button
*/









/*
function Button() {
    const handleClick = () => console.log("OUCH");

    return(<button onClick={handleClick}>Click me</button>);
} // Sempre que <button> for clicado irá mostrar no console a mensagem, "OUCH", da const handleClick

export default Button
*/







// CLICK EVENT COM IF E ELSE
/*
function Button() {

    let count = 0; // count é definido começar em 0

    const handleClick = (name) => {
        
        if(count < 3) {
            count++ // ++ Sempre que for clicado irá add 1
            console.log(`${name} you clicked me ${count} time/s`);
        }

        else {
            console.log(`${name} stop clicking me!`);
        }
    } // Enquanto (if) o valor de count ser menor que 3, irá mostrar a mensagem dentro do (if) e quando passar de 3 irá mostrar a mensagem dentro do (else)

    return(<button onClick={() => handleClick("Emerson")}>Click me</button>); 
    // Valor de ${name} é definida no <button> em handleClick("Nome")
}

export default Button
*/








// BUTTON QUANDO RECEBER CLICK ELE IRÁ MUDAR A MENSAGEM
function Button() {
    const handleClick = (e) => e.target.textContent = "OUCH";

    return(<button onClick={(e) => handleClick(e)}>Click me</button>);
} // e = event

export default Button