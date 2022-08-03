import React from "react";
// import ToDoList from "./ToDoList";

const Form = ({ setInputText, todoList, setTodoList, inputText, setTaskStatus, message, setMessage }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        setMessage(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (message.trim().length !== 0) {
            setTodoList([
                {text: inputText, complete: false, id: Math.random() * 1000},
                ...todoList
            ]);
        }
        setInputText("");
    };
    const taskStatusHandler = (e) => {
        console.log(e.target.value);
        setTaskStatus(e.target.value);
    };


    return(
        <form>
            <input 
                onChange={inputTextHandler} 
                type="text" className="todo-input" 
                value={inputText}
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={taskStatusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option vlaue="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;