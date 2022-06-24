import React, {useEffect, useState } from "react";


const CountDown = () => {

    const [timer, setTimer] = useState('00:00:00:00');
    let end = new Date('06 25 2022 12:00:00');
    const [temp, setTemp] = useState(end.getTime());

    const getTimeRemaining = () => {

        let current = new Date();

        const total = temp - current.getTime();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor((total/1000 / 60 / 60 / 24));
        
        if (total > 0){
            setTimer(`${days}:${hours}:${minutes}:${seconds}`);
        }
        else{
            setTimer("LETS PLAY")
        }

    }

    useEffect(()=>{
        const interval = setInterval(() => {
            getTimeRemaining();
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div>
            <h1>{timer}</h1>
        </div>
    )
};

export default CountDown;