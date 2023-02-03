import { todos, useSubscription } from "../../libs/gqty";
import { FC } from "react";

type Props = {
  selected: todos["id"] | null;
  setSelected: (id: todos["id"] | null) => void;
}

export const Todos: FC<Props> = ({selected, setSelected}) => {
  const subscription = useSubscription();
  const todos = subscription.todos();

  return (
    <div className="menu bg-base-100 w-56">
      <div className="prose pl-4 mt-8 mb-4"><h2>TO Dos</h2></div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id ?? "todo-id"}
          >
            <button
              onClick={() => setSelected(todo.id)}
              className={selected === todo.id ? 'active' : undefined}
            >
              <h2>{todo.content}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}