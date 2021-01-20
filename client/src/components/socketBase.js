import io from "socket.io-client";
const SeverEndpoint = 'http://localhost:5000';

const socket = io(SeverEndpoint);
export default socket;