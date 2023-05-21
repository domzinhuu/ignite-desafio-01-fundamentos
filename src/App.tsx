import { useState } from "react";
import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskModel } from "./models/taskModel";

export function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  function onSave(task: string): void {
    const taskModel: TaskModel = {
      id: Date.now().toString(),
      description: task,
      completed: false,
    };

    setTasks([...tasks, taskModel]);
  }

  function onUpdateList(updatedTaskList: TaskModel[]): void {
    setTasks(updatedTaskList);
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <CreateTask onSave={onSave} />

        <div className={styles.taskListContainer}>
          <TaskList tasks={tasks} onChangeList={onUpdateList} />
        </div>
      </main>
    </div>
  );
}
