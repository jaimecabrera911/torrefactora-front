import { TaskModel } from "../models/task.model.ts";
import axios from "axios";

const URL: string = import.meta.env.VITE_API_URL

export async function getAll(): Promise<TaskModel[]> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${URL}/tasks`
    };

    const response = await axios.request(config);
    console.log(response)
    return response.data
}

export async function findByStatus(status: string): Promise<TaskModel[]> {
    const tasks = await getAll();
    console.log(tasks)
    return tasks.filter(t => t.status == status)
}

export async function createTask(taskModel: TaskModel): Promise<TaskModel[]> {
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${URL}/tasks`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(taskModel)
    };
    const response = await axios.request(config);
    return response.data
}

export async function updateTask(id: string, taskModel: TaskModel): Promise<TaskModel[]> {
    const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${URL}/tasks/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(taskModel)
    };
    const response = await axios.request(config);
    return response.data
}