import React, {useCallback, useState} from 'react';
import './Board.css';
import {ChessMan} from './ChessMan';
import {AvailablePosition} from './AvailablePosition';
import socket from "./socketBase";

export const Board = ({roomId, boardWidth, boardHeight, chessMen, isHost}) => {

    const [availablePositions, setAvailablePositions] = useState({forMan: -1, positions: []});

    const handleGetPosition = useCallback((evt) => {
        const chessManId = parseInt(evt.target.id);
        socket.emit('user_request_available_pos', roomId, chessManId , (data) => {
            setAvailablePositions({forMan: chessManId, positions: data});
        })
    }, []);

    const handleMove = useCallback((evt) => {
        socket.emit('user_move', roomId,
            {x: parseInt(evt.target.dataset.x), y: parseInt(evt.target.dataset.y) },
            parseInt(evt.target.dataset.forman),
            () => setAvailablePositions({forMan: -1, positions: []}));
    }, []);

    return (
        <div className="boardContainer" style={{width: boardWidth + 'px', height: boardHeight + 'px'}}>
            {chessMen.map((chessMan, i) => {
                return <div key={i}>
                    <div className="chessManContainer">
                        <ChessMan isHost={isHost} chessMan={chessMan} onClick={handleGetPosition}></ChessMan>
                    </div>
                </div>
            })}

            {availablePositions.positions.map((position, i) => {
                return <div key={i}>
                    <div className="chessManContainer">
                        <AvailablePosition isHost={isHost} position={position} forMan={availablePositions.forMan} onClick={handleMove}></AvailablePosition>
                    </div>
                </div>
            })}
        </div>
    );
}