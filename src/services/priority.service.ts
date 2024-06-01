import axios from "axios";
import {PriorityModel} from "../models/priority.model.ts";

export class PriorityService {

    private URL: string = import.meta.env.VITE_API_URL

    public async getAll(): Promise<PriorityModel[]> {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.URL}/priorities`
        };

        const response = await axios.request(config);
        return response.data
    }
}