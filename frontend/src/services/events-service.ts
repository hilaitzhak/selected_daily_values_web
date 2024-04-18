import { ApplicationDate, IThisDayEvent } from "../models/types";

export class EventsService {

    async getThisDayEvents (date: ApplicationDate): Promise<IThisDayEvent[]> {
        try {
            const response = await fetch(`https://selected-daily-values-web.onrender.com/onthisday/${date.month}/${date.day}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data: IThisDayEvent[] = await response.json();
            return data;
        } catch (error) {
            console.error('getThisDayEvents error:', error);
            return [];
        }
    }
}