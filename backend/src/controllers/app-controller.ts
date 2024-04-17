import axios from "axios";
import { Request, Response } from "express";

export class AppController {

    constructor() {}

    async getTitle(req: Request, res: Response) {

        try {
            let { month, day } = req.params;
            const wiki_api = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;
            const response = await axios.get(wiki_api);
            console.log(response.data);
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching data from Wikipedia API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}