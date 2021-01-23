import React from 'react';
import {getStyleByCoordinate} from  './Common';

export const AvailablePosition = ({rotate, position, forMan, onClick}) => {
    return (
        <div className="chessMan" onClick={onClick} data-forman={forMan} data-x={position.x} data-y={position.y}
             style={getStyleByCoordinate(rotate, position)}>oo</div>
    );
}