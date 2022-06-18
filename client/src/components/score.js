import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {GrClose} from 'react-icons/gr'


const domain = "http://localhost:5001/api";


const Score = () => {

    return (
        <div className="scoreContainer">

            <IconContext.Provider value={{ color: "white" }}>
                <div className="close">
                    <Link to={'/'}>
                        <GrClose />
                    </Link>
                </div>
            </IconContext.Provider>
            <h1>
                SCORE
            </h1>

        </div>

    )
}

export default Score;