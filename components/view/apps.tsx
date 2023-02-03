import { apps, useSubscription } from "../../libs/gqty";
import { FC } from "react";

type Props = {
  selected: apps["id"] | null;
  setSelected: (id: apps["id"] | null) => void;
}

export const Apps: FC<Props> = ({ selected, setSelected }) => {
  const subscription = useSubscription();
  const apps = subscription.apps();

  return (
    <div className="menu bg-base-100 w-56">
      <div className="prose pl-4 mt-8 mb-4"><h2>Apps</h2></div>
      <ul>
        {apps.map((app) => (
          <li
            key={app.id ?? "todo-id"}
          >
            <button
              onClick={() => setSelected(app.id)}
              className={selected === app.id ? 'active' : undefined}
            >
              <h2>{app.name}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}