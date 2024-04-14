import { useEffect, useState } from 'react';
import './header.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../loading/loading';

interface AppHeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

function AppHeader({ darkMode, toggleDarkMode }: AppHeaderProps) {
    const { month, day } = useParams<{ month: string; day: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        console.log(month, day);
        fetchTitle();
    }, []);

    const fetchTitle = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/onthisday/${month}/${day}`);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching title from server.');
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
                {loading ? <Loading/> : 
                <a href={`https://en.m.wikipedia.org/wiki/${getTitleLink(month, day)}`} target="_blank" rel="noopener noreferrer">{`${day}/${month}`}</a>
                }
            </h1>
        </div>
    );
}

export default AppHeader;