import {useEffect, useState} from "react";

export const getStyleByCoordinate = (rotate, pixelRate, position) => {

    const style = {};

    let xCoordinate = rotate ? 'right' : 'left';
    let yCoordinate = rotate ? 'top' : 'bottom';

    style[xCoordinate] =  (position.x * pixelRate) + 'px';
    style[yCoordinate] =  (position.y * pixelRate) + 'px';

    return style;
}