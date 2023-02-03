import { FC, useState } from "react";
import { Todos } from "./view/todos";
import { todos, contacts, apps } from "../libs/gqty";
import { Contracts } from "./view/contracts";
import { Apps } from "./view/apps";

export const View: FC = () => {
  const [selectedTodo, setSelectedTodo] = useState<todos["id"] | null>(null);
  const [selectedContract, setSelectedContract] = useState<contacts["id"] | null>(null);
  const [selectedApp, setSelectedApp] = useState<apps["id"] | null>(null);

  return (
    <div className="w-screen min-h-screen border-neutral border-8 px-4 flex justify-between">
      <Todos selected={selectedTodo} setSelected={setSelectedTodo}/>
      <Contracts selected={selectedContract} setSelected={setSelectedContract}/>
      <Apps selected={selectedApp} setSelected={setSelectedApp}/>
    </div>
  );
};
