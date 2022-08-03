import React from "react";

const Todo = ({ text, todo, todoList, setTodoList }) => {
    const deleteHandler = () => {
        setTodoList(todoList.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodoList(todoList.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, complete: !item.complete
                };
            }
            return item;
        }))
    };
    // 針對 filter 和 arrow function 真的很不熟

    return(
        <div className="todo">
            <li className={`todo-item ${todo.complete ? "completed" : ""}`}>{text}</li>
            {/* 看不懂逃脫符號的用意 */}
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;