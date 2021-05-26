// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';
const baseUrl = 'https://crudcrud.com/api/970b657677594cd795801dcd69812f6e/tasks';

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });

export const getTasksList = () =>
    fetch(baseUrl)
        .then(response => response.json());