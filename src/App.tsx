import { TaskCard } from "./components/taskCard/TaskCard"
import styles from "./index.module.css"

function App() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Easy Task</h1>
        <div className={styles.head}>
          <input placeholder="Nova tarefa" type="text" className={styles.input} />
          <button className={styles.button}>+</button>
        </div>
        <div className={styles.tasksContainer}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />  
        </div>

        <span className={styles.span}>Há 5 tarefas pendentes</span>
      </div>
    </main>
  )
}

export default App
