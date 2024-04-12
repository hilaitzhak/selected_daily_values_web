import axios from "axios";
import { Request, Response } from "express";

export class AppController {

    constructor() {}

    async getTitle(req: Request, res: Response) {

        try {
            const { month, day } = req.params;
            const wiki_api = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;
            const response = await axios.get(wiki_api);
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching data from Wikipedia API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}