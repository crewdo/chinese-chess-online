import Player from '../Player/Player';
import Game from '../Game/Game';

class Room {

    static ROOM_NAME_PREFIX = 'chinese_chess_room_id';

    constructor(roomId)
    {
        this.roomId = roomId;
        this.players = []
        this.visitors = [];
    }

    initialize(id, newUsername, colorKeeping)
    {
        var player = new Player({id: id, colorKeeping: colorKeeping, name : newUsername})

        if(this.joinAsPlayer(player))
        {
            this.game = new Game(this.roomId);
        }
    }


    joinAsPlayer(player)
    {
        if(this.players.length === 2) return false;

        if(this.players.some(value => value.id === player.id)) return false;

        this.players.push(player);

        return true;
    }

    joinAsVisitor(visitor)
    {
        if(this.visitors.some(value => value.id === visitor.id)) return false;

        this.visitors.push(visitor);

        return true;
    }

    getPlayer(id)
    {
        return this.players.filter(value => value.id === id)[0];
    }

}

module.exports = Room;