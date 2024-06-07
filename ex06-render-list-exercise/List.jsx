function List(props) {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <span>{item.income}</span></li>);

    return(
        <>
        <div className="container">
        <h1 className="myH1">{category}</h1>
        <ol className="myList">{listItems}</ol>
        </div>
        </>
    );
}

export default List