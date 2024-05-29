// ----------- 5. conditional rendering -----------------

// conditional rendering = allows you to control what gets rendered in your application based on certain conditions
// (show, hide, or change components)


import UserGreeting from './UserGreeting.jsx';

function App() {
    return(
        <>
        <UserGreeting isLoggedIn={true} username="Emerson"/>
        </>
    ); // {true} = mostra
        // {false} = mostra um texto de erro definido no else
}

export default App