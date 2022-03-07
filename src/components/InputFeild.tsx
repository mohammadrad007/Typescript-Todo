import React, { useState } from "react";
import "./inputFeild.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="formInput">
      <input type="text" placeholder="Enter a task" className="inputBox" />
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
