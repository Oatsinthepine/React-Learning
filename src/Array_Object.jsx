import {useState} from 'react'

// this is the practice of updating the state of an object in React
function Object() {
    const [car, setCar] = useState({year: 2020, make: 'Toyota', model: 'Corolla'});

    function handleYearChange(event) {
        // {...object} is used to copy the existing properties of the object
        // setCar({...car, year: event.target.value}); -> this works but better to use the updater function
        setCar(prevCar => ({...prevCar, year:event.target.value}));
    }

    // the updater function is used to ensure that the state is updated based on the previous state,
    // the convention is to 'prev+State' or 'prevObject' to indicate that it is the previous state being used to update the current state
    // then make it to an arrow function to return the new state object
    function handleMakeChange(event) {
        setCar(prevCar => ({...prevCar, make:event.target.value}))
    }

    function handleModelChange(event) {
        setCar(prevCar => ({...prevCar, model:event.target.value}))
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make}, {car.model}</p>
            <input type='number' value={car.year} onChange={handleYearChange}/> <br/>
            <input type='string' value={car.make} onChange={handleMakeChange}/> <br/>
            <input type='string' value={car.model} onChange={handleModelChange}/> <br/>
        </div>
    )
}

export default Object;

// this is the practice of updating the state of an array in React
export function Array() {

    const [foods, setFoods] = useState(['Pizza', 'Burger', 'Pasta']);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value
        console.log(newFood);
        if (newFood.trim() === "") return; // check if the input is empty or just whitespace
        setFoods(prevFoods => [...prevFoods, newFood]); // add the new food to the array if it is not empty
        document.getElementById("foodInput").value = ""; // clear the input field after adding
    }

    return(<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => (<li key={index}>{food}</li>))}
            <input type = "text" id="foodInput" placeholder="enter food name"/>
            <button onClick = {handleAddFood}>Add food</button>
        </ul>
    </div>)
}

// Here is the practice of updating the array of objects in React, this practice combines the two above.
export function ArrayOfObjects() {
    const [cars, setCars] = useState([]); // this will hold an array of car objects

    const [carYear, setCarYear] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {
        let newCar = {year: carYear, make: carMake, model: carModel};
        console.log(newCar);
        setCars(prevCars => [...prevCars, newCar])
        // clear the input fields after adding the car
        setCarYear('');
        setCarMake('');
        setCarModel('');
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    // this function will handle the logic of clicking the list of car to remove it from the list
    function handleRemoveCar(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    // remember when passing a function to an event handler, if the function takes parameters, need to use an arrow function to point to the function
    // otherwise, it will be called immediately when the component renders, not when the event occurs.
    // e.g: onClick={handleRemoveCar(index)} will call the function immediately, instead use onClick={() => handleRemoveCar(index)} to pass the index to the function when the event occurs.
    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                ))}
            </ul>
            <input type="number" value={carYear} placeholder="enter the year" onChange={handleYearChange}/> <br/>
            <input type="text" value={carMake} placeholder="enter the make" onChange={handleMakeChange}/> <br/>
            <input type="text" value={carModel} placeholder="enter the model" onChange={handleModelChange} /> <br/>

            <button onClick = {handleAddCar}>Add car</button>
        </div>
    )

}
