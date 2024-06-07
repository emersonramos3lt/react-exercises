import picturePic from './assets/img1.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={picturePic} alt="Foto de uma grande montanha, com o seu pico coberto de neve" />

            <h2 className='card-title'>Lorem ipsum dolor sit.</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fuga.</p>
        </div>
    ); // className = class
}

export default Card

// Para colocar uma imagem salva no React você deve primeiro colocar (import picturePic from './assets/img1.jpg'), após isso você deve colocar (img src{picturePic}) entre {}