function ToDoList(item , ToDo, setToDo) {
    function RemoveToDo(item) {
        setToDo(typeof ToDo.filter((todo) => todo !== item))
    }
    return(
        <div>
            <div>
                <li> {item.name} {item.location} {item.range}</li>
            </div>
            <span>
            <button onClick={() => RemoveToDo(item)}>Remove</button>  
            </span>
        </div>
    );
}
export default ToDoList;