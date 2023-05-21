import styles from "./TaskListHeader.module.css";

interface TaskListHeaderProps {
  totalTask: number;
  totalCompleted: number;
}

export function TaskListHeader({
  totalTask = 0,
  totalCompleted = 0,
}: TaskListHeaderProps) {
  return (
    <div className={styles.taskListHeader}>
      <strong>
        Tarefas criadas<span>{totalTask}</span>
      </strong>
      <strong>
        Concluidas<span>{`${totalCompleted} de ${totalTask}`}</span>
      </strong>
    </div>
  );
}
