import { useState } from "react";
import RestaurantForm from "./RestaurantForm";
import ToDoList from "./ToDoList";
function ToDo() {
    const [ToDo, setToDo] = useState([{
        name: 'FireFly',
        location: 'Yarmouk',
        range: 90,
    }]);
    return(
        <>
        <RestaurantForm ToDo={ToDo} setToDo={setToDo} />
        <ToDoList ToDo={ToDo} setToDo={setToDo} />
        </>
    );
}
export default ToDo;