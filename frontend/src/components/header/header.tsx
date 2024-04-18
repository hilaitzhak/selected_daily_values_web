import { ApplicationDate } from '../../models/types';
import { DateUtils } from '../../utils/date-utils';
import './header.css';

export interface AppHeaderProps {
    toggleDarkMode: (event: any) => void;
    date: ApplicationDate
}

function AppHeader({ toggleDarkMode, date }: AppHeaderProps) {

    return (
        <div className="app-header-wrapper">
            <div className="checkbox">
                <input id="cbx" type="checkbox" onChange={toggleDarkMode}/>
                <label className="toggle" htmlFor="cbx"><span></span></label>
            </div>
            <a className="app-title" href={`https://en.m.wikipedia.org/wiki/${DateUtils.getTitleLink(date)}`} target="_blank" rel="noopener noreferrer">{`${date.day}/${date.month}`}</a>
        </div>
    );
}

export default AppHeader;