import { useEffect, useState } from 'react';
import './header.css';
import { useParams } from 'react-router-dom';
import { dataService } from '../../services/service';

export interface AppProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

function AppHeader({ darkMode, toggleDarkMode }: AppProps) {
    const { month = '', day = '' } = useParams<{ month: string | undefined; day: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        onMount();
    }, []);

    const onMount = async () => {

        try {
            const data_service = new dataService();
            const data  = await data_service.getAllData(month, day);
            console.log(data, 'header');
            setLoading(false);
            return data;
        } catch (error) {
            console.error('Error fetching data service:', error);
            setLoading(false);
        }
    }

    function getTitleLink(month: string | undefined, day: string | undefined): string {
        if (month && day) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return `${months[parseInt(month, 10) - 1]}_${day}`;
        } else {
            return '';
        }
    }

    return (
        <div className="app-header-wrapper">
            <div className="checkbox">
                <input id="cbx" type="checkbox" onClick={toggleDarkMode}/>
                <label className="toggle" htmlFor="cbx"><span></span></label>
            </div>
            <h1 className="app-title">
                {loading ? 'Loading...' : 
                <a href={`https://en.m.wikipedia.org/wiki/${getTitleLink(month, day)}`} target="_blank" rel="noopener noreferrer">{`${day}/${month}`}</a>
                }
            </h1>
        </div>
    );
}

export default AppHeader;