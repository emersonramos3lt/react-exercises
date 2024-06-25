import React, {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); // Definir o intervalo de atualização

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        const meridiem = hours >= 12 ?  "PM" : "AM"; // Dependendo da hora irá mudar para PM ou AM

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}` // O que está dentro do `` irá ser mostrado no <span> quando for chamado // {formatTime()}
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    } // Irá evitar que fique apenas um número sozinho, exemplo 5 para 05

    return(
        <div className='clock-container'>
            <div className='clock'>
            <span>{formatTime()}</span>
            </div>
        </div>
    );

}

export default DigitalClock;