import React, { useState } from "react";
import "./inputFeild.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  return (
    <form className="formInput" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter a task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
