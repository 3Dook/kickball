import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './signup.css';



const domain = process.env.REACT_APP_API_URL || "http://localhost:4000/api";


const SignUp = () => {

    const [name, setName] = useState("")
    const handleSubmit = async e =>{
        e.preventDefault();
        console.log("the domain name is ", domain)
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

            <div className="close">
                <IconContext.Provider value={{ color: "#ffffff", size: "2em" }}>
                        <Link to={'/'}>
                            <AiOutlineClose />
                        </Link>
                </IconContext.Provider>
            </div>
            
            <h1>
                SIGN UP
            </h1>

            <form onSubmit={handleSubmit}>

                <label>
                    <div className="nameLabel">name</div>
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