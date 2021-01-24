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
            console.log('Winner:' + data.winner.name)
            setGameState(0);
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


    const getInitBoardSize = () => {

        let width, height;
        if(window.innerHeight <= window.innerWidth) {
            height = window.innerHeight;
            width = (height / 10) * 9;
        }
        else {
            width = window.innerWidth;
            height = (width / 9) * 10;
        }

        return {
            width, height
        }
    }

    function useWindowWidth() {

        const [boardWidth, setBoardWidth] = useState(getInitBoardSize().width);
        const [boardHeight, setBoardHeight] = useState(getInitBoardSize().height);

        useEffect(() => {
            const handleResize = () => {
                const {width, height} = getInitBoardSize();
                setBoardWidth(width);
                setBoardHeight(height);
            }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });

        return [boardWidth, boardHeight]
    }

    const [boardWidth, boardHeight] = useWindowWidth();

    const pixelRate = boardWidth / 8 + 50;

    return (
        <div className="roomContainer">
            <div className="roomBodyContainer">
                <Board isHost={isHost} gameState={gameState} handleStart={handleStart} roomId={id} boardWidth={boardWidth - pixelRate} boardHeight={boardHeight - pixelRate} pixelRate={(boardWidth - pixelRate) / 8} chessMen={chessMen}
                       rotate={rotate}/>
            </div>
        </div>
    );
}