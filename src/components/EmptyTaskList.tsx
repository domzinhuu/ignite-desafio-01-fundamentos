import { Notepad } from "phosphor-react";
import styles from "./EmptyTaskList.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <Notepad size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
