import axios from "axios";
import { IThisDayEvent } from "../models/types";
import { EventsUtils } from "../utils/events-utils";

export class EventsService {

    public async getThisDayEvents(month: string, day: string) {
        const wiki_api = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;
        const response = await axios.get(wiki_api);
        const data = response?.data?.selected || [];
        const result: IThisDayEvent[] = EventsUtils.parseHistoricalEvents(data);
        return result;
    }
}