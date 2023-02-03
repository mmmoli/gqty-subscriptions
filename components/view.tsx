import { FC } from "react";
import { useSubscription } from "../libs/gqty";

export const View: FC = () => {
  const subscription = useSubscription();
  const todos = subscription.todos();

  return (
    <div className="w-screen min-h-screen border-neutral border-8 px-4">
      <div className="menu bg-base-100 w-56">
        <div className="prose pl-4 mt-8 mb-4"><h2>TO Dos</h2></div>
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
    </div>
  );
};
