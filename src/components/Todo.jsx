import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/todo-logo.svg";
import TodoItems from "./TodoItems";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={logo} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input field */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add your task"
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          onClick={add}
        >
          ADD +
        </button>
      </div>

      {/* Todo list */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              isComplete={item.isComplete}
              id={item.id}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
