import React, {useEffect, useState, useCallback} from 'react';
import socket from "../socketBase";
import {getItem} from "../localStore";
import queryString from 'query-string';
import {useHistory} from "react-router-dom";
import {Board} from "../Board";

export const Room = ({location}) => {

    const name = getItem('chineseChessUserName');
    let history = useHistory();
    const boardWidth = 450;
    const boardHeight = 500;

    const {id} = queryString.parse(location.search);

    const [isHost, setIsHost] = useState(false);

    useEffect(() => {
        if (typeof id == "undefined" || !id) {
            history.push("/rooms")
        } else {
            socket.emit('user_joined', id, name, (data) => {
                if (data.code === 404) {
                    history.push("/rooms")
                }
                else{
                    setIsHost(data.isHost)
                }
            });
        }
    }, [location.search, name, history, isHost])

    const [chessMen, setChessMen] = useState([]);

    useEffect(() => {
        socket.on('chess_men_data', data => {
            setChessMen(data.chessMen);
        })

        return () => socket.off('chess_men_data');

    }, [chessMen])


    const handleStart = useCallback(() => {
        socket.emit('user_request_start', id, (msg) => {
            console.log(msg);
        });
    });

    return (
        <div className="roomContainer">
            <div className="roomBodyContainer">
                <button onClick={handleStart}>Start</button>
                <Board roomId={id} boardWidth={boardWidth} boardHeight={boardHeight} chessMen={chessMen} isHost={isHost}/>
            </div>
        </div>
    );
}