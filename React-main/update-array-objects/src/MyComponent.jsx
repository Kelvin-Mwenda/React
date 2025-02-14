import { useState } from 'react';
import './index.css'

function MyComponent(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <>
            <div className="cars-container">
                <div className="car-list-container">
                    <h2>🚗List Of Cars</h2>
                    <hr/>
                    <ul>
                        {cars.map((car, index) => (
                            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year}, {car.make}, {car.model}</li>
                        ))}
                    </ul>
                </div>

                <div className="add-car-container">
                    <h2>Add Car🚗</h2>
                    <hr/>
                    <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                    <input type="text" placeholder="Enter Car Make" value={carMake} onChange={handleMakeChange}/><br/>
                    <input type="text" placeholder="Enter Car Model" value={carModel} onChange={handleModelChange}/><br/>
                    <button onClick={handleAddCar}>Add Car
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default MyComponent