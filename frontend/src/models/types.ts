export interface ApplicationDate { month: string; day: string; };

export interface IThisDayEvent {
    text: string
    year: string;
    title: string;
    img: string;
    mobile: {
        url: string;
    }
    desktop: {
        url: string;
    }
}