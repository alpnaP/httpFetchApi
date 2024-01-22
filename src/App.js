import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Todo from "./components/Todo";
import Error from "./components/Error";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodo] = useState([]);
  const [userData, setUserData] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error!!!!");
        }
      })
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        setErrorFlag(true);
      });
    setUserData(true);
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
      })
      .catch((error) => {
        setErrorFlag(true);
      });
    setUserData(false);
  };

  if (errorFlag) {
    <Error />;
  }
  return (
    <div className="App">
      <div className="topbar">
        <button onClick={fetchUsers}>Users</button>
        <button onClick={fetchTodos}>Todos</button>
        <br />

        {userData
          ? users.map((user, index) => {
              return <User user={user} />;
            })
          : todos.map((todo, index) => {
              return <Todo todo={todo} />;
            })}
      </div>
    </div>
  );
}

export default App;
