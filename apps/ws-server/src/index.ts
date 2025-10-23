const WebSocket = require("ws");
const { client } = require("@repo/db/client");

type WebSocketServer = import("ws").WebSocketServer;
type WebSocket = import("ws").WebSocket;

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');
    
    ws.on('message', async (message: string) => {
        console.log('Received:', message);
        
        // Echo the message back
        ws.send(`Echo: ${message}`);
    });
    
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server running on port 8080');
