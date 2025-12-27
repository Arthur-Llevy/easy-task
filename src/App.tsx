import { createTask, getAllTaks } from "./api/easyTask";
import { TaskCard } from "./components/taskCard/TaskCard"
import styles from "./index.module.css"
import { useEffect, useState } from "react";
import type { TaskType } from "./types/taskType";

function App() {
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [uncompletedTasksNumber, setUncompletedTasks] = useState<number>(0);

  function filterUncompletedTasks(tasks: TaskType[]): void {
    let uncompletedTasks = tasks.filter(task => task.completed === false);
    setUncompletedTasks(uncompletedTasks.length);
  }

  async function handleGetAllTasks () {
    try {
      let tasks = await getAllTaks();
      filterUncompletedTasks(tasks);
      setAllTasks(tasks);
    } catch (ex: Error | unknown) {
      throw new Error("Tasks not found")
    }
  }

  async function handleCreateTask() {
    await createTask(taskTitle, false);
    window.location.reload();
  }

  useEffect(() => {
    handleGetAllTasks();
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Easy Task</h1>
        <div className={styles.head}>
          <input 
            placeholder="Nova tarefa"
            type="text"
            className={styles.input}
            onChange={event => setTaskTitle(event.target.value)}
          />
          <button onClick={handleCreateTask} className={styles.button}>+</button>
        </div>
        <div className={styles.tasksContainer}>
        </div>
        {allTasks !== undefined && allTasks.length > 0 && allTasks.map(task => (
          <div
            className={styles.tasks}
            key={task.id}
          >
            <TaskCard 
              id={task.id}
              title={task.title}
              completed={task.completed}
            />
          </div>
        ))}
        <span className={styles.span}>Há {uncompletedTasksNumber} tarefas pendentes</span>
      </div>
    </main>
  )
}

export default App
