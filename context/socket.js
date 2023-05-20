import io from "socket.io-client"
import { url } from "../Constants/Urls";
const Endpoint = url;
const socket = io(Endpoint);

export default socket;

