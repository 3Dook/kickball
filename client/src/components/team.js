import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './team.css'
const domain = "http://localhost:5001/api";


const Team = (props) => {    
    const [ players,setPlayers ] = useState([{name: "Fake", record: [0,0,0], team:""}])

    

    const getPlayers = async () =>{
        try{
            const response = await fetch(domain)
            const jsonData = await response.json()

            setPlayers(jsonData.players)
        } catch(error){
            console.log(error.message);
        }
    };

    useEffect(()=>{
        getPlayers();
    }, [])

    return (
        <div className="popOutContainer">

            <div className="close">
                <IconContext.Provider value={{ color: "#ffffff", size: "2em" }}>
                        <Link to={'/score'}>
                            <AiOutlineClose />
                        </Link>
                </IconContext.Provider>
            </div>
            <h1>
                {props.teamName}
            </h1>
            <div className="roster">
                <div className="rosterTable">
                    <div className="rosterRow">
                        <div>name</div>
                        <div>Runs</div>
                        <div>Catches</div>
                        <div>Bonus</div>
                    </div>
                    <br></br>
                    {
                    players.map((element, key)=>{
                        return (
                            <div key={key} className="rosterRow">
                                <div>{element.name}</div>
                                <div>{element.record[0]}</div>
                                <div>{element.record[1]}</div>
                                <div>{element.record[2]}</div>    
                            </div>
                        )
                    })
                    
                    }
                </div>

            </div>

        </div>

    )
}

export default Team;