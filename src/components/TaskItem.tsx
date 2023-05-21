import { Trash } from "phosphor-react";
import { TaskModel } from "../models/taskModel";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: TaskModel;
  onToggle: (task: TaskModel) => void;
  onDelete: (task: TaskModel) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  function handleToggle(): void {
    onToggle(task);
  }

  function handleDelete(): void {
    onDelete(task);
  }

  return (
    <div className={styles.taskItem}>
      <div className={styles.taskItemSelection}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            value={task.completed ? "on" : "off"}
            checked={task.completed}
            onChange={handleToggle}
          />
          <span className={styles.checkMark} />
        </label>
        <p onClick={handleToggle} className={task.completed ? styles.completedItem : ""}>
          {task.description}
        </p>
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        <Trash size={18} />
      </button>
    </div>
  );
}
