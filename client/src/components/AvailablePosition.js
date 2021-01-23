import React from 'react';

export const AvailablePosition = ({position, forMan, onClick}) => {
    const style = {left: (position.x * 50) + 'px', bottom: (position.y * 50) + 'px'};
    return (
        <div className="chessMan" onClick={onClick} data-forman={forMan} data-x={position.x} data-y={position.y}
             style={style}>oo</div>
    );
}