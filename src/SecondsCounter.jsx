import { useState, useEffect } from 'react';
import './styles/SecondsCounter.css';

function SecondsCounter() {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(previousTime => {
                const seconds = previousTime.seconds + 1;
                const minutes = previousTime.minutes + Math.floor(seconds / 60);
                const hours = previousTime.hours + Math.floor(minutes / 60);
                return {
                    seconds: seconds % 60,
                    minutes: minutes % 60,
                    hours: hours
                };
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [time]);
    ;
    return (
        <div className="Counter fs-1 d-flex  justify-content-center"/*  style={{border:"1px solid red"}} */>
            {/*  {time} */}
            <div className="time-part">{String(time.hours).padStart(2, '0')}</div>
            <div className="time-part">:</div>
            <div className="time-part">{String(time.minutes).padStart(2, '0')}</div>
            <div className="time-part">:</div>
            <div className="time-part">{String(time.seconds).padStart(2, '0')}</div>
        </div>


    );
}

export default SecondsCounter;