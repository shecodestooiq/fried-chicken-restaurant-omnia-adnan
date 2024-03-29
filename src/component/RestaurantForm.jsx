import { useState } from "react";

function RestaurantForm() {
    const [NewInput, setNewInput] = useState("");
    const [locationrestaurant, setlocationrestaurant] = useState("")
    const [range, setrange] = useState()
    const handleInputChange = (event) => {
    setNewInput(event.target.value);
};
    const handLocationChange = (event) => {
    setlocationrestaurant(event.target.value);
};
    const handlerangeChange = (event) => {
    setrange(event.target.value);
};
    const [dothing, setdothing] = useState([{ id: 1,
        name: 'FireFly',
        location: 'Yarmouk',
        range: 90,
    }]);
    const handleAddTodo = (e) => {
    e.preventDefault();
    setdothing([...dothing, { id: Date.now(), name: NewInput, location: locationrestaurant, range: range }]);
    setNewInput("");
    setlocationrestaurant("");
    setrange(0);
};

    return(
        <>
        <div className="card">
        <form>
        <label>
            Name new Restaurant
        <input type="NewInput" value={NewInput} onChange={handleInputChange} required/>
        </label>
        <label>
            Restaurant Location 
        <input type="NewInput" value={locationrestaurant} onChange={handLocationChange} required/>
        </label>
        <label>
            Rating It fron 5
        <input type="NewInput" value={range} onChange={handlerangeChange} required/>
        </label>
        <button onClick={(e) => handleAddTodo(e)}>ADD</button>
        </form>
            {dothing.map((item) => <li>{item.name} {item.location} {item.range}</li>)}
    </div>
        </>
    );
}
export default RestaurantForm;