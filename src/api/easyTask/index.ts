async function getAllTaks () {
    return fetch("http://localhost:8080/api/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data);
}

async function createTask(title: string, completed: boolean) {
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

async function deleteTask(id: number) {
    return fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data);
}

export { getAllTaks, createTask, deleteTask };