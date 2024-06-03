/*
function Picture() {

    const imageUrl = './src/assets/img1.jpg';

    const handleClick = () => console.log("MOUNTAIN");

    return(<img onClick={handleClick} src={imageUrl}></img>)
} // No img você coloca o nome da const, e não do arquivo, para acessar a imagem

export default Picture
*/




// USANDO UM EVENT
function Picture() {

    const imageUrl = './src/assets/img1.jpg';

    const handleClick = (e) => e.target.style.width = "500px"; // Add width de 500px há img

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default Picture