import { IThisDayEvent } from "../models/types";

export class EventsUtils {
    
    public static parseHistoricalEvents(data: any[]) {
        const result: IThisDayEvent[] = [];
        for (const obj of data) {
            const thisDayEvent: IThisDayEvent = {
                title: obj.pages[0]?.titles?.normalized,
                year: obj.year,
                text: obj.text,
                img: obj.pages[0]?.thumbnail?.source,
                desktop: {
                    url: obj.pages[0]?.content_urls?.desktop?.page
                },
                mobile: {
                    url: obj.pages[0]?.content_urls?.mobile?.page
                }
            };
            result.push(thisDayEvent);
        }
        return result;
    }
}