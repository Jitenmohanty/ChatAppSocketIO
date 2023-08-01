
const http = require('http');
const express = require('express');
const SocketIo = require('socket.io');
const cors = require('cors');
const app = express();
const port = 4500 || process.env.PORT;

app.get('/' , (req,res)=>{
    res.send('It is Working')
})


const server = http.createServer(app);

const io = SocketIo(server);

io.on("connection",()=>{
    console.log("new Connection");
})

server.listen(port,()=>{
    console.log(`Server is running on  http://localhost:${port}`)
})