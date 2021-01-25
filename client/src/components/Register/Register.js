import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStateByLocalStorage } from "../localStore";
import "./Register.css";
import {useHistory} from "react-router-dom";


export const Register = () => {

    let history = useHistory();

    const [name, setName] =  useStateByLocalStorage('chineseChessUserName');

    const registerInputOnChange = (event) => setName(event.target.value);

    useEffect(() => {
        if(name) {
            history.push(`/rooms`);
        }
    }, [])
    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <h1 className="heading">Your name?</h1>
                <div>
                    <input placeholder="Name" value={name} className="registerInput" type="text" onChange={registerInputOnChange} />
                </div>
                <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/rooms`}>
                    <button className={'button'} type="submit">Play</button>
                </Link>
            </div>
        </div>
    );
}