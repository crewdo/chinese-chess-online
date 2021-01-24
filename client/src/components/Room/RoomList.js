import React, {useState, useEffect} from 'react';
import socket from "../socketBase";
import {getItem} from "../localStore"
import {useHistory} from "react-router-dom";
import {WaveButton} from "../WaveButton";

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
                <WaveButton handler={createRoom} text={`CREATE`} additionalClass={`createRoom`}></WaveButton>
                <div className="roomListContainer">
                            {Object.keys(roomList).map(
                                (key, i) =>
                                    <div className="roomItemContainer" key={roomList[key].id}>
                                        <div className={'buttonRoom'}>
                                            <div>
                                                <p>ID: {roomList[key].id}</p>
                                                <p style={{fontSize: 12}}>Players:{roomList[key].length}</p>
                                                <p style={{fontSize: 12}}>Viewers: {roomList[key].visitors}</p>
                                            </div>
                                            <button  onClick={joinRoom} className="joinButton" data-id={roomList[key].id}>Join</button>
                                        </div>
                                    </div>)}
                </div>

            </div>
        </div>
    );
}