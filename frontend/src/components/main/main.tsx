import React, { useEffect, useState } from 'react';
import './main.css';
import AppHeader from '../header/header';
import Content from '../content/content';
import { useParams } from 'react-router-dom';
import { EventsService as EventsService } from '../../services/events-service';
import {useNavigate} from 'react-router-dom';
import { ApplicationDate, IThisDayEvent } from '../../models/types';
import { DateUtils } from '../../utils/date-utils';
import { CircularProgress } from '@mui/material';

export interface MainProps {
    toggleDarkMode: (event: any) => void;
}

function Main({ toggleDarkMode }: MainProps) {

    const navigate = useNavigate();
    const { month = '', day = '' } = useParams<{ month: string; day: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [ thisDayEvents, setThisDayEvents ] = useState<IThisDayEvent[]>();
    const [ thisDayDate, setThisDayDate ] = useState<ApplicationDate>({ day: '', month: '' });
    
    useEffect(() => {
        onMount();
    }, []);

    const parseDate = () => {
        let date: ApplicationDate = { month, day };
        const is_valid = DateUtils.validateApplicationDate(date);
        if(!is_valid) {
            const today_date = new Date();
            navigate({pathname: `/onthisday/${today_date.getMonth() + 1}/${today_date.getDate()}`});
            date = { month: `${today_date.getMonth() + 1}`, day: `${today_date.getDate()}` };
        }
        return date;
    }

    const onMount = async () => {
        try {
            const parsed_date = parseDate();
            setThisDayDate(parsed_date);
            const events_service = new EventsService();
            const response_data = await events_service.getThisDayEvents(parsed_date);
            setThisDayEvents(response_data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data service:', error);
        }
    }

  return (
    <div className='main-wrapper'>
        {loading ? <div className='loader'><CircularProgress size={80}/></div> : 
        <>
            <AppHeader toggleDarkMode={toggleDarkMode} date={thisDayDate}/>
            <Content thisDayEvents={thisDayEvents}/>
        </>}
    </div>
  );
}

export default Main;

