import React from 'react';
import {getStyleByCoordinate} from  './Common';

export const ChessMan = ({isHost, chessMan, onClick}) => {
    return (
        <div className="chessMan" onClick={onClick} id={chessMan.id}
             style={getStyleByCoordinate(isHost, chessMan.position)}>{chessMan.type}</div>
    );
}