import styles from "./index.module.css"

export function TaskCard() {
    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <input type="checkbox" />
                <p>Título tarefa</p>
            </div>

            <div className={styles.buttons}>
                <button>
                    <img src="/edit-icon.svg" />
                </button>
                <button>
                    <img src="/delete-icon.svg" />
                </button>
            </div>
        </div>
    )
}