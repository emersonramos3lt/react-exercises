/*
function UserGreeting(props) {

    if(props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>
    } // True
    else {
        return <h2>Please log in to continue</h2>
    } // False
}

export default UserGreeting
*/


// 2 Forma - Terá o mesmo resultado da primeira forma.
/*
function UserGreeting(props) {
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to continue</h2>) // TRUE e FALSE
}
*/

// Mesmo código acima, porém mais facil para leitura





import PropTypes from 'prop-types'; // Boa prática

function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
} // welcomeMessage = true 
    // loginPrompt = false

// Se for TRUE mostrará (welcomeMessage) e se for FALSE (loginPrompt)

UserGreeting.PropTypes = { // Boa prática
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
} // Assegura que os valores serão apenas bool e string 

UserGreeting.defaultProps = { // Definimos os valores padrões de (isLoggedIn) e (username)
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting