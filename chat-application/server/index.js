import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle incoming messages
    socket.on('send_message', (data) => {
        io.emit('receive_message', data); // Broadcast the message to all users
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
