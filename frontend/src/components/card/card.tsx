import { IThisDayEvent } from '../../models/types';
import './card.css';

interface CardProps {
    thisDayEvent: IThisDayEvent;
    type: "mobile" | "desktop";
}

function Card({ thisDayEvent, type }: CardProps) {

    const redirect = () => {
        const url = thisDayEvent?.[type]?.url;
        window.open(url,'_blank').focus();
    }

    return (
        <div className="card-wrapper" onClick={() => redirect()}>
            <div className="card-content">
                <div className="card-content-header" style={{ backgroundImage: `url(${thisDayEvent.img})` }}>
                    <div className="card-content-header-title">
                        <p>{thisDayEvent.year}</p>
                        <h2>{thisDayEvent.title}</h2>
                    </div>
                </div>
                <div className='card-content-text'>
                    <p>{thisDayEvent.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
