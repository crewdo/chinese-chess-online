export const getStyleByCoordinate = (isHost, position) => {

    const style = {left: (position.x * 50) + 'px'};

    let xCoordinate = 'bottom';

    if(!isHost) {
        xCoordinate = 'top';
    }

    style[xCoordinate] =  (position.y * 50) + 'px';

    return style;

}

