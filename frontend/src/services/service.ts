
export class dataService {

    constructor () {}

    async getAllData (month: string, day: string) {
        try {
            const response = await fetch(`http://localhost:3001/onthisday/${month}/${day}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('getAllData error:', error);
            return [];
        }
    }
}