import Header from './Header.jsx' // Importamos o nosso Header.jsx que criamos
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  
  return( // Necessário colocar <Header/> e </Footer/> dentro das <> e </>
    <> 
      <Header/>
      <Food/>
      <Footer/>
    </>
    // Irá retornar o conteúdo do Header. Podemos colocar também apenas <Header/> que irá funcionar também
  );
}

export default App // Manter

// O app.jsx é criado automaticamnte quando é feito a instalação

// INICIAR O PROJETO NO TERMINAL

// Primeito abrir um novo terminal, escrever nesse novo terminal (cd my-react-app) my-react-app é o nome do seu arquivo que você escolheu na instalação, após isso você irá apertar Enter

// Após as etapas acima você irá digitar (npm run dev), e apertar Enter