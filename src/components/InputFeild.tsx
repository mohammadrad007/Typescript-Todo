import React from "react";
import "./inputFeild.css";

const InputFeild = () => {
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
