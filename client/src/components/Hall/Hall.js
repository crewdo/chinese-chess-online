import React, {useEffect } from "react";
import io from "socket.io-client";
let socket;

export const Hall = ({ location }) => {
    const ENDPOINT = 'http://localhost:5000/';

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('join', {}, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('list_out_rooms', message => {
            console.log(message);
        });
    }, []);

    return (
        <div className="chineseChess">
            crewdo
        </div>
    );
}