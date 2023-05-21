import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <CreateTask />
      </main>
    </div>
  );
}
