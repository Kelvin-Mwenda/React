// Import necessary modules
import express from 'express'; // Express for creating the server and handling routes
import http from 'http'; // Node.js HTTP module for creating the server
import { Server } from 'socket.io'; // Socket.IO for real-time communication
import cors from 'cors'; // CORS middleware to handle cross-origin requests

// Initialize Express application
const app = express();

// Enable CORS to allow requests from the frontend
app.use(cors());

// Create an HTTP server using Express
const server = http.createServer(app);

// Initialize a Socket.IO server and configure it to accept requests from a specific origin
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Allow requests from this origin (frontend URL)
        methods: ['GET', 'POST'], // Allow these HTTP methods
    },
});

// Listen for client connections to the WebSocket server
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id); // Log the user's unique socket ID

    // Listen for the 'send_message' event from the client
    socket.on('send_message', (data) => {
        // Broadcast the received message to all connected clients
        io.emit('receive_message', data);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id); // Log when a user disconnects
    });
});

// Define the port number the server will run on
const PORT = 4000;

// Start the server and log the running status
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log the server URL
});
