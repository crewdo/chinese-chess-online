import React from 'react';
import {getStyleByCoordinate} from  './Common';

export const AvailablePosition = ({rotate, pixelRate, position, forMan, onClick}) => {
    const style = getStyleByCoordinate(rotate, pixelRate, position);
    style['backgroundSize'] = pixelRate / 4.2 + 'px';

    return (
        <div className="chessMan availablePositionItem" onClick={onClick} data-forman={forMan} data-x={position.x} data-y={position.y}
             style={style}></div>
    );
}