import React from 'react';

export const ChessMan = ({chessMan, onClick}) => {
    const style={left: (chessMan.position.x * 50) + 'px', bottom: (chessMan.position.y * 50) + 'px'};
    return (
        <div className="chessMan" onClick={onClick} id={chessMan.id}
             style={style}>{chessMan.type}</div>
    );
}