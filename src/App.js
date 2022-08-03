import React, { useState, useEffect } from 'react';
import './App.css';
// importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  // State management
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [taskStatus, setTaskStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [message, setMessage] = useState();

  // useEffect
  useEffect(() => {
    getLocalTodoList();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodoList();
    // console.log(filteredTodoList);
  }, [taskStatus, todoList]);

  // Function
  const filterHandler = () => {
    switch(taskStatus){
      case 'completed':
        setFilteredTodoList(todoList.filter(todo => todo.complete === true))
        break;
      case 'uncompleted':
        setFilteredTodoList(todoList.filter(todo => todo.complete === false))
        break;
      default:
        setFilteredTodoList(todoList)
        break;
    }
  }
  const saveLocalTodoList = () => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  };
  const getLocalTodoList = () => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      let localData = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(localData);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Chris's Todo Lists</h1>
      </header>
      <Form 
        inputText={inputText}
        todoList={todoList} 
        message={message}
        setTodoList={setTodoList}
        setInputText={setInputText}
        setTaskStatus={setTaskStatus}
        setMessage={setMessage}
      />
      <ToDoList
        todoList={todoList}
        setTodoList={setTodoList}
        filteredTodoList={filteredTodoList}
      />
    </div>
  );
};

export default App;
