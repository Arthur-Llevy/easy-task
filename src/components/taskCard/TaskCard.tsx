import { deleteTask } from "../../api/easyTask"
import styles from "./index.module.css"

type TaskCardProps = {
    title: string,
    completed: boolean,
    id: number
}

export function TaskCard({ title, completed, id }: TaskCardProps) {
    async function handleDelteTask() {
        await deleteTask(id);
        // window.location.reload()
    }

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <input type="checkbox" checked={completed} />
                <p>{title}</p>
            </div>

            <div className={styles.buttons}>
                <button>
                    <img src="/edit-icon.svg" />
                </button>
                <button onClick={handleDelteTask}>
                    <img src="/delete-icon.svg" />
                </button>
            </div>
        </div>
    )
}