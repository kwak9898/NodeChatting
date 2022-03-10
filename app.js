const express = require('express')
const port = 3000
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('request_message', (msg) => {
        // response_message로 접속중인 모든 사용자에게 msg 를 담은 정보를 방출한다.
        io.emit('response_message', msg)
    })

    socket.on('disconnect', async () => {
        console.log('user disconnected')
    })
})

//error
app.use((req, res, next) => {
    res.sendStatus(404)
})
app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500)
})


app.listen(port, () => {
    console.log(`http://localhost:${port} 준비 완료 🎉`)
})