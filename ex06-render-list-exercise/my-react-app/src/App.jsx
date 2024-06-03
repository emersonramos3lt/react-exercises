import List from './List.jsx'

function App() {
  const countries = [{id: 1, name: 'Luxemburgo', income: 131.384},
                      {id: 2, name: 'Irlanda', income: 106.059},
                      {id: 3, name: 'Noruega', income: 94.660},
                      {id: 4, name: 'Singapura', income: 88.447},
                      {id: 5, name: 'Estados Unidos', income: 85.373},
                      {id: 6, name: 'Islândia', income: 84.594},
                      {id: 7, name: 'Catar', income: 81.400},
                      {id: 8, name: 'Macau', income: 78.962},
                      {id: 9, name: 'Dinamarca', income: 68.898},
                      {id: 10, name: 'Austrália', income: 66.589}
  ]

  return(
  <>
  <List items={countries} category="Países"/>
  </>
  );
}

export default App