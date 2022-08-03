import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todo, todoList, setTodoList, filteredTodoList }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodoList.map(todo => {
                    return <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        todo={todo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                })}
                {/* 為什麼這邊一定要設定成 {}？ 因為這個是 JSX */}
                {/* 為什麼裡面一定要設定成 ()？ 他其實是 arrow function 的一種簡化寫法，另一種換成 ruturn 就可以用大刮號*/}
                {/* https://ithelp.ithome.com.tw/articles/10195669 */}
            </ul>
        </div>
    );
};

export default ToDoList;