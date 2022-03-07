import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
