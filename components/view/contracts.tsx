import { contacts, useSubscription } from "../../libs/gqty";
import { FC } from "react";

type Props = {
  selected: contacts["id"] | null;
  setSelected: (id: contacts["id"] | null) => void;
}

export const Contracts: FC<Props> = ({selected, setSelected}) => {
  const subscription = useSubscription();
  const contacts = subscription.contacts();

  return (
    <div className="menu bg-base-100 w-56">
      <div className="prose pl-4 mt-8 mb-4"><h2>Contracts</h2></div>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id ?? "todo-id"}
          >
            <button
              onClick={() => setSelected(contact.id)}
              className={selected === contact.id ? 'active' : undefined}
            >
              <h2>{contact.firstName} {contact.lastName}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}