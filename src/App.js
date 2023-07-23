import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleTodo(e) {
    setTodo(e.target.value);
  }

  function handleAdd() {
    if (todo.trim() !== "") {
      setList((prevList) => [...prevList, todo]);
      setTodo("");
    }
  }

  function handleDelete(index) {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="App">
      <div className="main">
        <section id="todoList">
          <header className="site-header">
            <h1>Todo App</h1>
            <p>Completed: 0/{list.length} </p>
          </header>

          <div className="input">
            <input
              type="text"
              placeholder="add a todo..."
              name="input"
              value={todo}
              onChange={(e) => handleTodo(e)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleAdd} className="plusBtn">
              <span className="addPlus">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"></path>
                </svg>
              </span>
            </button>
          </div>

          <ul className="listItems">
            {list.map((item, index) => (
              <li key={index}>
                <span className="completed">
                  <input id={`checkbox-${index}`} type="checkbox" />
                  {item}
                </span>

                <span className="todoicons">
                  <button
                    className="danger"
                    onClick={() => handleDelete(index)}
                  >
                    <FontAwesomeIcon icon={faRemove} />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
