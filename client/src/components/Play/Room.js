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

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        if (typeof id == "undefined" || !id) {
            history.push("/rooms")
        } else {
            socket.emit('user_joined', id, name, (data) => {
                if (data.code === 404) {
                    history.push("/rooms")
                }
                else{
                    setRotate(data.rotate)
                }
            });
        }
    }, [location.search, name, history, rotate])

    const [chessMen, setChessMen] = useState([]);

    useEffect(() => {
        socket.on('chess_men_data', data => {
            setChessMen(data.chessMen);
        })

        return () => socket.off('chess_men_data');

    }, [chessMen])

    useEffect(() => {

        socket.on('game_over', data => {
            alert('Winner:' + data.winner.name)
        })

        return () => socket.off('game_over');

    }, [])

    useEffect(() => {

        socket.on('a_player_left', () => {
            setRotate(false)
            alert('a_player_left');
        })

        return () => socket.off('a_player_left');

    }, [])

    useEffect(() => {

        socket.on('current_room_removed', () => {
            history.push("/rooms")
        })

        return () => socket.off('current_room_removed');

    }, [])


    const handleStart = useCallback(() => {
        socket.emit('user_request_start', id, (msg) => {
            console.log(msg);
        });
    });

    return (
        <div className="roomContainer">
            <div className="roomBodyContainer">
                <button onClick={handleStart}>Start</button>
                <Board roomId={id} boardWidth={boardWidth} boardHeight={boardHeight} chessMen={chessMen} rotate={rotate}/>
            </div>
        </div>
    );
}