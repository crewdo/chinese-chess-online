import React from 'react';
export const WaveButton = ({handler, text, additionalClass = ''}) => {
    return (
        <div className={`waves-block ${additionalClass}`}>
            <div className="waves wave-1"></div>
            <div className="waves wave-2"></div>
            <div className="waves wave-3"></div>
            <button className={`buttonStart`} onClick={handler}>{text}</button>
        </div>
    );
}