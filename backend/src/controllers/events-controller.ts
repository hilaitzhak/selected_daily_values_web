import { Request, Response } from "express";
import { EventsService } from "../services/events-service";

export class EventsController {
    private eventsService: EventsService
    constructor() {
        this.eventsService = new EventsService();
    }

    async getThisDayEvents(req: Request, res: Response) {

        try {
            const { month, day } = req.params;
            const result = await this.eventsService.getThisDayEvents(month, day)
            res.json(result);
        } catch (error) {
            console.error('Error fetching data from Wikipedia API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}