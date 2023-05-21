import { useEffect, useState } from "react";
import { TaskModel } from "../models/taskModel";
import { EmptyTaskList } from "./EmptyTaskList";
import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.css";
import { TaskListHeader } from "./TaskListHeader";
import Lottie from "lottie-react";
import PartyLottie from "../assets/party.json";

interface TaskListProps {
  tasks: TaskModel[];
  onChangeList: (taskList: TaskModel[]) => void;
}

export function TaskList({ tasks, onChangeList }: TaskListProps) {
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const totalCompleted = tasks.filter((task) => task.completed).length;
    setTotalCompletedTasks(totalCompleted);
    if (tasks.length > 0 && tasks.length === totalCompleted) {
      console.log("Task Completed");
      setShowAnimation(true);
    }
  }, [tasks]);

  function onToggle(task: TaskModel): void {
    const updatedList = tasks.map((t: TaskModel) => {
      if (t.description === task.description) {
        return { ...t, completed: !t.completed };
      }

      return t;
    });

    onChangeList(updatedList);
  }

  function onDeleteTask(task: TaskModel): void {
    const updatedList = tasks.filter(
      (t: TaskModel) => t.description !== task.description
    );

    onChangeList(updatedList);
  }

  function handlerAnimationLoop() {
    setShowAnimation(false);
  }

  return (
    <div className={styles.taskList}>
      <TaskListHeader
        totalCompleted={totalCompletedTasks}
        totalTask={tasks.length}
      />
      {showAnimation && (
        <div className={styles.tasksCompletedContainer}>
          <PartyAnimation onFinishedLoop={handlerAnimationLoop} />
        </div>
      )}
      {tasks.length === 0 && <EmptyTaskList />}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

interface PartyAnimationProps {
  onFinishedLoop: () => void;
}
function PartyAnimation({ onFinishedLoop }: PartyAnimationProps) {
  return (
    <Lottie
      animationData={PartyLottie}
      loop={1}
      onLoopComplete={onFinishedLoop}
    />
  );
}
