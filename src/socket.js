import io from "socket.io-client";

const URL = import.meta.env.VITE_API_SOCKET_URL;

export const socket = io.connect(URL);
