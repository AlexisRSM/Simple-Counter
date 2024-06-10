import { useState, useEffect } from 'react';

function SecondsCounter() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [time]);
    ;
    return (
        <div className="Counter">
            Time {time}
        </div>
    );
}

export default SecondsCounter;