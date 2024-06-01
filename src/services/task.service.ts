import axios from "axios";
import {TaskModel} from "../models/task.model.ts";

export class TaskService {

    private URL: string = import.meta.env.VITE_API_URL

    public async getAll(): Promise<TaskModel[]> {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.URL}/tasks`
        };

        const response = await axios.request(config);
        return response.data
    }

    public async create(taskModel: TaskModel): Promise<TaskModel[]> {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.URL}/tasks`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(taskModel)
        };
        const response = await axios.request(config);
        return response.data
    }

    public async update(id: string, taskModel: TaskModel): Promise<TaskModel[]> {
        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${this.URL}/tasks/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(taskModel)
        };
        const response = await axios.request(config);
        return response.data
    }
}