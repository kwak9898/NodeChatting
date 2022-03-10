const http = require('http');
const fs = require('fs');
const socket = require('socket.io');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    fs.readFile('index.html', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
    });
});

server.listen(3000, () => {
    console.log('3000번 포트 연결 성공!!!');
});