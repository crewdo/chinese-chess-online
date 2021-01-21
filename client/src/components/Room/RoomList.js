import React, {useState, useEffect} from 'react';
import socket from "../socketBase";
import {getItem} from "../localStore"
import { useHistory } from "react-router-dom";

export const RoomList = () => {

    let history = useHistory();

    const name = getItem('chineseChessUserName')

    const [roomList, setRoomList] = useState({});

    useEffect(() => {
        socket.on('list_out_rooms', rooms => {
            setRoomList(rooms);
        });

        return () => {
            socket.off('list_out_rooms');
        }
    }, [])

    useEffect(() => {
        socket.emit('user_online');
    }, [])


    const createRoom = () => {

        socket.emit('user_created_room', name, (newRoomId) => {
            history.push(`/play?id=${newRoomId}`);
        });

    }

    const joinRoom = (event) => {
        let roomId = event.target.dataset.id;
       history.push(`/play?id=${roomId}`);
    }

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className='createRoomButton' onClick={createRoom}>create room</div>
                {Object.keys(roomList).map(
                    (key, i) =>
                        <div key={i}>
                            <button onClick={joinRoom} data-id={roomList[key].id} className={'button'}>{roomList[key].id} | {roomList[key].length} | {roomList[key].visitors}</button>
                        </div>)}
            </div>
        </div>
    );
}