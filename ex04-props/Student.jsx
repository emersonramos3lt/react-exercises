import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p> 
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    ); // name será definido em App.jsx
}

// props + nome do item que daremos um valor em App.jsx. Aqui os nomes são (name) e (age)

// Em Student estamos usando true e false, e precisamos colocar duas mensagens após o ? que a primeira é a mensagem do True e a segunda do False

Student.propTypes = { // Bom para evitar bugs
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
} // Irá mostrar onde o erro está

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
} // Caso nenhum valor seja adicionado, airá aparecer os valores padrões

export default Student