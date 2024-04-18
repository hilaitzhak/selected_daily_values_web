import { IThisDayEvent } from '../../models/types';
import Card from '../card/card';
import '../content/content.css';
import { BrowserView, MobileView } from 'react-device-detect';

interface ContentProps {
    thisDayEvents: IThisDayEvent[];
}
function Content({ thisDayEvents }: ContentProps) {
    return (
        <>
            <BrowserView>
                <div className='content-wrapper'>
                    <div className="card-grid">
                        {thisDayEvents.map((thisDayEvent: IThisDayEvent, index: any) => (
                            <Card key={index} thisDayEvent={thisDayEvent} type='desktop'/>
                        ))}
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className='content-wrapper'>
                    <div className="card-grid">
                        {thisDayEvents.map((thisDayEvent: IThisDayEvent, index: any) => (
                            <Card key={index} thisDayEvent={thisDayEvent} type='mobile'/>
                        ))}
                    </div>
                </div>    
            </MobileView>
        </>
    );
}

export default Content;
