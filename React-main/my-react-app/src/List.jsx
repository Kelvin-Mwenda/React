import propTypes from 'prop-types'

function List(props) {

    const itemList = props.items
    const category = props.category

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)) ALPHABETICALLY
    //fruits.sort((a,b)=>b.name.localeCompare(a.name))REVERSE ALPHABETICALLY
    //fruits.sort((a,b)=>a.calories-b.calories)NUMERIC
    //fruits.sort((a,b)=>b.calories-a.calories)REVERSE NUMERIC

    //const lowCalFruits = fruits.filter(fruit=>fruit.calories < 100)
    //const highCalFruits = fruits.filter(fruit=> fruit.calories >= 100)
    const listItems = itemList.map(item => <li key={item.id}>
                                            NAME: {item.name}, &nbsp;
                                            CALORIES: {item.calories}
                                            </li>)

    return(
        <>
            <div className="text-center">
                <h3 className="list-category">{category}</h3>
                <ol>{listItems}</ol>
            </div>
        </>
    )
}
List.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    })),
    category: propTypes.string
}
List.defaultProps = {
    category: 'Category',
    items: []
}
export default List