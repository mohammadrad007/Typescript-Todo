import React from "react";
import { Todo } from "../../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="singleTodoBox">
      <span className="todosText">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </form>
  );
};

export default SingleTodo;
