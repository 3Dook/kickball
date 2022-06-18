import React, {useEffect, useState } from "react";
import CountDown from "./countdown";
import { BsGem } from 'react-icons/bs';
import NavBar from "./navbar";
import './header.css';
const domain = "http://localhost:5001/api";


const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <div className="icon">
                    <BsGem size="50"/>
                </div>
            </div>
            <div className="content">
                <div className="Middle Space">
                        |
                </div>
                <div className="countdown">
                    <h1>
                        GHG SLOSH BALL
                    </h1>
                    <CountDown />
                </div>
                    
                <div className="Middle Space">
                |
                </div>
                <NavBar/>
            </div>
        </div>

    )
}

export default Header;