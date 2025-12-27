import type { TaskType } from "../../types/taskType";

const API_URL = import.meta.env.VITE_API_URL;

async function getAllTaks (): Promise<TaskType[]> {
    return fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data);
}

async function createTask(title: string, completed: boolean): Promise<TaskType> {
    return fetch(API_URL, {
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
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data)
}

async function updateCompletedState(id: number, state: boolean): Promise<TaskType> {
    return fetch(`${API_URL}/${id}`, {
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
    return fetch(`${API_URL}/${id}`, {
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