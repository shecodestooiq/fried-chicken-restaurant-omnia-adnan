/* eslint-disable array-callback-return */
import { useState } from "react";

function RestaurantForm() {
    const [NewInput, setNewInput] = useState("");
    const [locationrestaurant, setlocationrestaurant] = useState("");
    const [range, setrange] = useState(0);
    const [Editing, setEditing] = useState(true)
    const [ToDo, setToDo] = useState([{
        name: 'FireFly',
        location: 'Yarmouk',
        range: 90,
    }]);

    const AddTodo = (e) => {
    e.preventDefault();
    setToDo([...ToDo, { id: Date.now(), name: NewInput, location: locationrestaurant, range: range }]);
    setNewInput("");
    setlocationrestaurant("");
    setrange(0);
    };
    const RemoveToDo = (e) => {
        e.preventDefault()
        setToDo(ToDo.filter((NewInput) => NewInput !== e))
    }
    function editRange(editRange, index) {
        const NewEdit = [...range];
        const item = NewEdit[index];
        item.ToDo =editRange;
        setrange(NewEdit);
        setEditing(true)

    }

    return(
        <>
        <div className="card">
        <form>
        <label>
            Name new Restaurant
        <input type="text" value={NewInput} onChange={(e) => setNewInput(e.target.value)} required/>
        </label>
        <label>
            Restaurant Location 
        <input type="text" value={locationrestaurant} onChange={(e) => setlocationrestaurant(e.target.value)} required/>
        </label>
        <label>
            Rating It fron 5
        <input type="number" value={range} onChange={(e) => setrange(e.target.value)} required max={5} min={1}/>
        </label>
        <button onClick={(e) => AddTodo(e)} type="submit">ADD</button><br />
        <button onClick={(e) => RemoveToDo(e)} type="submit">Remove</button><br />
        <button onClick={() => {
            setEditing(!Editing);
            // eslint-disable-next-line no-undef
            editRange(index)
        }}>Edit</button>
        </form>
        {ToDo.map((item) => 
        <li> {item.name} {item.location} {item.range}</li>
        )}
            
    </div>
        </>
    );
}
export default RestaurantForm;