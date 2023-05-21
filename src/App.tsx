import { useState } from "react";
import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function onSave(task: string): void {
    setTasks([...tasks, task]);
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <CreateTask onSave={onSave} />

        {/* TODO: adicionar aqui a lista de tarefas */}
      </main>
    </div>
  );
}
