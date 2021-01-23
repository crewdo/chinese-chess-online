export const getStyleByCoordinate = (rotate, position) => {

    const style = {};

    let xCoordinate = rotate ? 'right' : 'left';
    let yCoordinate = rotate ? 'top' : 'bottom';

    style[xCoordinate] =  (position.x * 50) + 'px';
    style[yCoordinate] =  (position.y * 50) + 'px';

    return style;
}

