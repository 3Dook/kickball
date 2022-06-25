import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './score.css'
const domain = process.env.REACT_APP_API_URL;


const Score = () => {

    const [usa, setUsa] = useState(0);
    const [oosa, setOosa] = useState(0);

    const getPlayers = async () =>{
        try{
            const response = await fetch(domain)
            const jsonData = await response.json()

            let results = jsonData.players.filter(player => player.team === "usa")
            let sum = results.reduce((accum, player)=>{
                return accum + player.record[0] + player.record[1] + player.record[2];
            }, 0)

            setUsa(sum);

            results = jsonData.players.filter(player => player.team === "oosa")
            sum = results.reduce((accum, player)=>{
                return accum + player.record[0] + player.record[1] + player.record[2];
            }, 0)

            setOosa(sum);
        } catch(error){
            console.log(error.message);
        }
    };
    
    useEffect(()=>{
        getPlayers();
    }, [])

    return (
        <div className="scoreContainer">

            <div className="close">
                <IconContext.Provider value={{ color: "#ffffff", size: "2em" }}>
                        <Link to={'/'}>
                            <AiOutlineClose />
                        </Link>
                </IconContext.Provider>
            </div>
            <h1>
                SCORE
            </h1>
            <div className="versusScore">
                <Link to={'/roster/usa'}>
                    <h1>
                    USA: {usa} 
                    </h1>
                </Link>

                vs

                <Link to={'/roster/oosa'}>
                    <h1>
                    OOSA: {oosa} 
                    </h1>
                </Link>
            </div>
        </div>

    )
}

export default Score;