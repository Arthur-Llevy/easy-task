import type { TaskType } from "../../types/taskType";

async function getAllTaks (): Promise<TaskType[]> {
    return fetch("http://localhost:8080/api/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data);
}

async function createTask(title: string, completed: boolean): Promise<TaskType> {
    return fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: completed
        })
    })
    .then(response => response.json())
    .then(data => data);
}

async function deleteTask(id: number): Promise<void> {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data)
}

async function updateCompletedState(id: number, state: boolean): Promise<TaskType> {
    return fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "",
            completed: state
        })
    })
    .then(response => response.json())
    .then(data => data);
}

async function updateTitle(id: number, title: string): Promise<TaskType> {
    return fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: ""
        })
    })
    .then(response => response.json())
    .then(data => data);
}

export { getAllTaks, createTask, deleteTask, updateCompletedState, updateTitle };