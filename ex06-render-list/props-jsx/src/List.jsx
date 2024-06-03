import PropTypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <span>{item.calories}</span></li>); // id, name, calories esses valores estão definidos em App.jsx, armazenados em um const

    return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </> // Category é o nome definido no return do App.jsx
    ); // listItems, são os items definidos em App.jsx
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string,
                                            calories: PropTypes.number,
    })),
}
List.defaultProps = {
    category: "category",
    items: [],
}
export default List


    /*
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}]; // Itens da array
                    // Precisa utilizar id
    */

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    //fruits.sort((a, b) => b.calories = a.calories); // REVERSE CALORIES

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Irá mostrar as frutas com maior número

    /*
    const lowCalFruits = fruits.map(lowCalFruit => <li key={lowCalFruit.id}>                                    {lowCalFruit.name}: &nbsp; 
        <span>{lowCalFruit.calories}</span></li>); // => arrow function
    */

        //const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>                                    {lowCalFruit.name}: &nbsp; 
            //<span>{lowCalFruit.calories}</span></li>); // Irá fazer a const lowCalFruits funcionar

    // Podemos colocar tags em volta dos itens da lista, aqui estamos usando <span>

    // Irá retornar todos os itens da array de fruits dentro de uma tag <ul> e <li> para as array
    //return(<ol>{listItems}</ol>);
 // <li> irá pegar os itens da array, e <ul> irá ficar em volta de <li>

// Se você colocar na const listItems (fruit.name) irá mostrar os nomes, e (fruits.calories)

// (name) e (calories) estão definidas na (const fruits dentro dá [{}]) 

