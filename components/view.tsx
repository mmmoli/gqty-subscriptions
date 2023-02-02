import { FC } from "react";
import { useSubscription } from "../libs/gqty";

export const View: FC = () => {
  const subscription = useSubscription();
  const todos = subscription.todos();

  return (
    <div>
      <h1>TO Dos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id ?? "todo-id"}>
            <div>
              <h2>{todo.content}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
