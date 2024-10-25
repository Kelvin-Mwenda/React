import {useState} from 'react'

function MyComponent(){
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])


    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ""

        if(newFood.trim() !== ""){
            setFoods(f => [...f,newFood])
        }
        else{
            window.alert("Please, fill out the text field!")
        }
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index))
    }

    return(
        <>
            <div>
                <h2>List Of Food</h2>
                <ul>
                    {foods.map((food, index) =>(
                        <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                    ))}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter food name" name="food-input"></input>
                <label htmlFor="food-input">
                <button onClick={handleAddFood}>Add Food</button>
                </label>
                
            </div>
        </>
    )
}
export default MyComponent