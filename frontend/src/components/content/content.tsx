import { useEffect, useState } from 'react';
import '../content/content.css';
import { useParams } from 'react-router-dom';
import { dataService } from '../../services/service';
import { BrowserView, MobileView } from 'react-device-detect';

function Content() {
    const {  month = '', day = '' } = useParams<{ month: string; day: string }>();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const data_service = new dataService();
            const response_data   = await data_service.getAllData(month, day);
            const dataArray = response_data.selected || [];
            setData(dataArray);
        } catch (error) {
            console.error('Error fetching data service:', error);
        }
    }
    
    return (
        <>
            <BrowserView>
                <div className='content-wrapper'>
                    <div className="card-grid">
                        {data.map((obj, index) => (
                            <div key={index} className="card-style">
                                <div className="card-content">
                                    <div className="card-content-header" style={{ backgroundImage: `url(${obj.pages[0]?.thumbnail?.source})` }}>
                                        <div className="card-content-header-title">
                                            <p>{obj.year}</p>
                                            <h2>{obj.pages[0]?.titles?.normalized}</h2>
                                        </div>
                                    </div>
                                    <div className='card-content-text'>
                                        <p>{obj.text}</p>
                                    </div>
                                </div>
                                <div className='card-actions'>
                                    <div className='card-btn'>
                                        <a href={obj.pages[0]?.content_urls?.desktop?.page} target="_blank" rel="noopener noreferrer">Read</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='content-wrapper'>
                    <div className="card-grid">
                        {data.map((obj, index) => (
                            <div key={index} className="card-style">
                                <div className="card-content">
                                    <div className="card-content-header" style={{ backgroundImage: `url(${obj.pages[0]?.thumbnail?.source})` }}>
                                        <div className="card-content-header-title">
                                            <p>{obj.year}</p>
                                            <h2>{obj.pages[0]?.titles?.normalized}</h2>
                                        </div>
                                    </div>
                                    <div className='card-content-text'>
                                        <p>{obj.text}</p>
                                    </div>
                                </div>
                                <div className='card-actions'>
                                    <div className='card-btn'>
                                        <a href={obj.pages[0]?.content_urls?.mobile?.page} target="_blank" rel="noopener noreferrer">Read</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>    
            </MobileView>
        </>
    );
}

export default Content;
