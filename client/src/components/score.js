import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './score.css'
const domain = "http://localhost:5001/api";


const Score = () => {

    const [usa, setUsa] = useState(0);
    const [oosa, setOosa] = useState(0);
    const [playerList, setPlayerList] = useState({})
    
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
                <h1>

                OOSA: {oosa} || USA: {usa} 
                </h1>
            </div>
            <div Player Container>

            </div>
        </div>

    )
}

export default Score;