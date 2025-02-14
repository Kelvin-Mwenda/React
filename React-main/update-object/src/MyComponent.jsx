import { useState } from "react";

function MyComponent(){
    const [car,setCar] = useState({year:2024,make:'Ford', model:'Mustang'})

    function handleYearChange(event){
        setCar(c => ({...c,year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c => ({...c,make: event.target.value}))
    }
    
    function handleModelChange(event){
        setCar(c => ({...c,model: event.target.value}))
    }

    return(
        <>
            <div>
                <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
                
                <label>Year: </label>
                <input type='number' id="year" value={car.year} onChange={handleYearChange}/><br/>

                <label>Make: </label>
                <input type='text' value={car.make} onChange={handleMakeChange}/><br/>

                <label>Model: </label>
                <input type='text' value={car.model} onChange={handleModelChange}/>
            </div>
        </>
    )
}
export default MyComponent