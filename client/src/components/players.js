import React, {useEffect, useState } from "react";

const domain = "http://localhost:5001/api";


const PlayersList = () => {

    const [ players,setPlayers ] = useState({})


    const getPlayers = async () =>{
        try{
            const response = await fetch(domain)
            const jsonData = await response.json()
            setPlayers(jsonData)
        } catch(error){
            console.log(error.message);
        }
    };

    useEffect(()=>{
        getPlayers();
    }, [])
    

    const checkPlayers = () =>{
        console.log(players)
    }

    return (
        <div>
            Hello Players
            <button onClick={checkPlayers}>Get Players</button>
        </div>

    )
}

export default PlayersList;