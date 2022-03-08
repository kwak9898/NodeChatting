const express = require('express')
const port = 3000
const app = express()
const indexRouter = require('./routers/index')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//router
app.use('/api', indexRouter)

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