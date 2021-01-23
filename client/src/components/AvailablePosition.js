import React from 'react';
import {getStyleByCoordinate} from  './Common';

export const AvailablePosition = ({rotate, pixelRate, position, forMan, onClick}) => {
    const style = getStyleByCoordinate(rotate, pixelRate, position);
    style['backgroundSize'] = pixelRate / 4.2 + 'px';
    style['width']= pixelRate + 'px';
    style['height']= pixelRate + 'px';

    const positionSize =  (pixelRate) / 2 * -1;
    if(!rotate) {
        style['marginBottom'] = positionSize / 1.2;
        style['marginLeft'] =  positionSize;
    }
    else {
        style['marginTop'] = positionSize / 1.2;
        style['marginRight'] =  positionSize;
    }

    return (
        <div className={`chessMan availablePositionItem ${rotate ? 'rotate' : ''}`}
             onClick={onClick}
             data-forman={forMan}
             data-x={position.x}
             data-y={position.y}
             style={style}> </div>
    );
}