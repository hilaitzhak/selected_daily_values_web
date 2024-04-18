import { ApplicationDate } from "../models/types";

export class DateUtils {
    
    public static validateApplicationDate(date: ApplicationDate): boolean {
        const day = Number(date.day);
        const month = Number(date.month);
        if (month < 1 || month > 12) {
            return false;
        }

        switch (month) {
            case 2: // February
                const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
                const daysInFebruary = isLeapYear(new Date().getFullYear()) ? 29 : 28;
                return day >= 1 && day <= daysInFebruary;
            case 4: // April
            case 6: // June
            case 9: // September
            case 11: // November
                return day >= 1 && day <= 30;
            default:
                return day >= 1 && day <= 31;
        }
    }

    public static getTitleLink(date: ApplicationDate): string {
        if (date.month && date.day) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return `${months[parseInt(date.month) - 1]}_${date.day}`;
        }
        return '';
    }
}