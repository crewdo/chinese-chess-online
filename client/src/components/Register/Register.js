import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStateByLocalStorage } from "../localStore";

export const Register = () => {

    const [name, setName] =  useStateByLocalStorage('chineseChessUserName');

    const registerInputOnChange = (event) => setName(event.target.value);

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <h1 className="heading">Your name?</h1>
                <div>
                    <input placeholder="Name" value={name} className="registerInput" type="text" onChange={registerInputOnChange} />
                </div>
                <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/rooms`}>
                    <button className={'button'} type="submit">Find A Room >>></button>
                </Link>
            </div>
        </div>
    );
}