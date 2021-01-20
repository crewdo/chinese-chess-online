import React, {useEffect} from 'react';
import socket from "../socketBase";
import {getItem} from "../localStore";
import queryString from 'query-string';
import {useHistory} from "react-router-dom";

export const Play = ({location}) => {

    const name = getItem('chineseChessUserName');
    let history = useHistory();

    useEffect(() => {

        const {id} = queryString.parse(location.search);

        if (typeof id == "undefined" && !id) {
            history.push("/rooms")
        } else {
            socket.emit('user_joined', id, name, (code) => {
                if (code === 404) {
                    history.push("/rooms")
                } else {
                    console.log('a user joined')
                }
            });
        }

    }, [location.search, name, history])

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div>
                    hello {name}
                </div>
            </div>
        </div>
    );
}