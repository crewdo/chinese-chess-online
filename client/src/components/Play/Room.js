import React, {useEffect, useState, useCallback} from 'react';
import socket from "../socketBase";
import {getItem} from "../localStore";
import queryString from 'query-string';
import {useHistory} from "react-router-dom";
import {Board} from "../Board";

export const Room = ({location}) => {

    const name = getItem('chineseChessUserName');
    let history = useHistory();

    const {id} = queryString.parse(location.search);

    const [rotate, setRotate] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const [gameState, setGameState] = useState(0);

    useEffect(() => {
        if (typeof id == "undefined" || !id) {
            history.push("/rooms")
        } else {
            socket.emit('user_joined', id, name, (data) => {
                if (data.code === 404) {
                    history.push("/rooms")
                } else {
                    setRotate(data.rotate)
                    setIsHost(data.isHost)
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
            setRotate(false);
            setGameState(0);
            console.log('a_player_left');
        })

        return () => socket.off('a_player_left');

    }, [])

    useEffect(() => {

        socket.on('current_room_removed', () => {
            history.push("/rooms")
        })

        return () => socket.off('current_room_removed');

    }, [history])


    const handleStart = useCallback(() => {
        socket.emit('user_request_start', id, (rs) => {
            if(rs.code === 200) {
                setGameState(1);
            }
            else {
                console.log(rs.msg)
            }
        });
    });

    const [boardWidth, setBoardWidth] = useState(0);
    const [boardHeight, setBoardHeight] = useState(0);

    const offset = 50;

    const resizeBoard = () => {
        if(window.innerHeight <= window.innerWidth) {
            setBoardHeight(window.innerHeight);
            setBoardWidth((boardHeight / 10) * 9);
        }
        else {
            setBoardHeight((boardWidth / 9) * 10);
            setBoardWidth(window.innerWidth);
        }
    }

    useEffect(() => {

        resizeBoard()

        window.addEventListener('resize', () => {
           resizeBoard()
        })

        return () => {
            window.removeEventListener('resize', () => {});
        }

    }, [boardWidth, boardHeight]);

    return (
        <div className="roomContainer">
            <div className="roomBodyContainer">
                {isHost && gameState === 0 && <button onClick={handleStart}>Start</button>}
                <Board roomId={id} boardWidth={boardWidth - offset} boardHeight={boardHeight - offset} pixelRate={(boardWidth - offset) / 9} chessMen={chessMen}
                       rotate={rotate}/>
            </div>
        </div>
    );
}