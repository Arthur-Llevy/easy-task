import { deleteTask, updateCompletedState, updateTitle } from "../../api/easyTask"
import type { TaskType } from "../../types/taskType";
import styles from "./index.module.css"

export function TaskCard({ title, completed, id }: TaskType) {
    async function handleDelteTask() {
        try {
            await deleteTask(id)
        } catch (error: Error | unknown) {
            throw new Error("Error on deleting fetch")
        }
    }

    async function changeState(state: boolean) {
        await updateCompletedState(id, state);
        window.location.reload();
    }

    async function changeTitle() {
        let newTitle = window.prompt("Digite o novo título: ");

        if (newTitle !== null && newTitle !== "" && newTitle !== undefined) {
            await updateTitle(id, newTitle);
            window.location.reload();
        } else {
            window.alert("Digite um título válido.")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <input 
                    type="checkbox"
                    checked={completed} 
                    onChange={event => changeState(event.target.checked)}
                />
                <p>{title}</p>
            </div>

            <div className={styles.buttons}>
                <button onClick={changeTitle}>
                    <img src="/edit-icon.svg" />
                </button>
                <button onClick={handleDelteTask}>
                    <img src="/delete-icon.svg" />
                </button>
            </div>
        </div>
    )
}