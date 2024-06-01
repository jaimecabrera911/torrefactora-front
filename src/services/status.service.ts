import axios from "axios";
import {StatusModel} from "../models/status.model.ts";

export class StatusService {

    private URL: string = import.meta.env.VITE_API_URL

    public async getAll(): Promise<StatusModel[]> {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.URL}/status`
        };

        const response = await axios.request(config);
        return response.data
    }
}