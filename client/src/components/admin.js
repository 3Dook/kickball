import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineSwap} from 'react-icons/ai';
import {MdDeleteForever} from 'react-icons/md';
import './team.css'
import axios from 'axios';


const domain = "http://localhost:5001/api";


const Admin = (props) => {    
    const [ players,setPlayers ] = useState([{name: "Fake", record: [0,0,0], team:"", _id:0}])

    

    const getPlayers = async () =>{
        try{
            const response = await fetch(domain)
            const jsonData = await response.json()
            console.log(jsonData.players[0]._id)
            setPlayers(jsonData.players)
        } catch(error){
            console.log(error.message);
        }
    };


    const handleDelete = (id) =>{
        axios.delete(domain+'/'+ id)
        .then(res => {
            console.log(res.data)
            window.location.reload(false);
        })
        .catch(err => {
            console.log(err)
        })  
    }

    const handleScoreChange = (id, record, pos, delta) => {
        record[pos] += delta;

        axios.request({
            method: "PUT",
            url: domain + '/' + id,
            data: {
                record: record,
            },
            headers: {}
        })
        .then(res => {
            console.log(res.data)
            window.location.reload(false);
        })
        .catch(err => {
            console.log(err)
        })  
    }

    const handleTeamName = (id, teamName) => {

    }

    const randomizeTeam = () => {
        // get number of team in each first, then iterate through and find
        // any non-team members, Will start with lowest number first till balance, then go from there.
    }


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
                ADMIN MASTER LIST
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
                    <div>
                        BLANK TEAM
                    </div>
                    {
                    players.map((element, key)=>{
                        if (element.team == ""){
                            return (
                                <div key={key} className="rosterRow">
                                    <div>
                                        <AiOutlineSwap />
                                        {element.name} 
                                        <MdDeleteForever onClick={()=>handleDelete(element._id)}/>

                                    </div>
                                    <div>
                                    <AiOutlinePlus
                                    onClick={()=>handleScoreChange(element._id, element.record, 0, 1)}
                                    />
                                    {element.record[0]} 
                                    <AiOutlineMinus
                                    onClick={()=>handleScoreChange(element._id, element.record, 0, -1)}
                                    />
                                    </div>
                                    <div>
                                    <AiOutlinePlus
                                    onClick={()=>handleScoreChange(element._id, element.record, 1, 1)}
                                    />
                                    {element.record[1]} 
                                    <AiOutlineMinus
                                    onClick={()=>handleScoreChange(element._id, element.record, 1, -1)}
                                    />
                                    </div>
                                    <div>
                                    <AiOutlinePlus
                                    onClick={()=>handleScoreChange(element._id, element.record, 2, 1)}
                                    />
                                    {element.record[2]} 
                                    <AiOutlineMinus
                                    onClick={()=>handleScoreChange(element._id, element.record, 2, -1)}
                                    />
                                    </div> 
                                </div>
                            )
                        }
                    })
                    
                    }

                    <div> USA</div>
                    <div> OOSA</div>
                </div>

            </div>

        </div>

    )
}

export default Admin;