import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './team.css'
const domain = process.env.REACT_APP_API_URL;


const Team = (props) => {    
    const [ players,setPlayers ] = useState([{name: "Fake", record: [0,0,0], team:""}])

    const [total, setTotal] = useState(0)
    

    const getPlayers = async () =>{
        try{
            const response = await fetch(domain)
            const jsonData = await response.json()
            const results = jsonData.players.filter(player => player.team === props.teamName)
            const sum = results.reduce((accum, player)=>{
                return accum + player.record[0] + player.record[1] + player.record[2];
            }, 0)

            setTotal(sum);
            setPlayers(results);
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
                    <h1>Total: {total}</h1>
                </div>

            </div>

        </div>

    )
}

export default Team;