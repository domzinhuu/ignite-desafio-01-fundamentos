import { PlusCircle } from "phosphor-react";
import styles from "./CreateTask.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface CreateTaskProps {
  onSave: (task: string) => void;
}

export function CreateTask({ onSave }: CreateTaskProps) {
  const [task, setTask] = useState("");

  function handleSubmitTask(el: FormEvent): void {
    el.preventDefault();
    onSave(task);
    setTask("");

  }

  function handleTaskChange(el: ChangeEvent<HTMLInputElement>) {
    el.target.setCustomValidity("");
    setTask(el.target.value);
  }

  function handleInvalidTask(el: InvalidEvent<HTMLInputElement>) {
    console.log("Invalid");
    el.target.setCustomValidity("É preciso informar a descrição da sua task!");
  }

  const isTaskEmpty = task.length === 0;

  return (
    <form onSubmit={handleSubmitTask} className={styles.createTask}>
      <input
        value={task}
        onChange={handleTaskChange}
        onInvalid={handleInvalidTask}
        required
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button disabled={isTaskEmpty} type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
