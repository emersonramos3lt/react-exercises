// props = read-only properties that are shared between components. A parent component can send data to a child component. 
// <Component key=value />

// propTypes = a mechanism that ensures that the passed value is of the correct datatype
// age: PropTypes.number

import Student from './Student.jsx';

function App() {
  
    return(
        <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student/>
        </>
    ); // Aqui estamos definindo os valores, que o Student.jsx irá pegar e mostrar

    // Podemos repetir Student várias vezes. Eles vão ter o mesmo estilo CSS do que o primeiro.

    // Se deixarmos <Student/> vazio ele irá mostrar os valores padrões, que definimos em Student.jsx
}

export default App
