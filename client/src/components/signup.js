import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {GrClose} from 'react-icons/gr'
import './signup.css';


const domain = "http://localhost:5001/api";


const SignUp = () => {

    const [name, setName] = useState("")
    const handleSubmit = async e =>{
        e.preventDefault();
        try {
            const body = {name}
            const response = await fetch(domain,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"; 
        } catch (error) {
            console.error(error.message)
            
        }
    }

    return (
        <div className="signup">

            <IconContext.Provider value={{ color: "white" }}>
                <div className="close">
                    <Link to={'/'}>
                        <GrClose />
                    </Link>
                </div>
            </IconContext.Provider>
            <h1>
                SIGN UP
            </h1>

            <form onSubmit={handleSubmit}>
                <label>
                    NAME
                    <input type="text" name="name" 
                    className="nameInput"
                    value={name} 
                    onChange={ e => setName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" className="submitInput" />
                
            </form>
        </div>

    )
}

export default SignUp;