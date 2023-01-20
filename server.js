import express from "express"
import {createServer} from "http"
import {Server} from "socket.io"


import { fileURLToPath } from "url"
import { dirname } from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const app = express()
const httpServer = createServer(app)
const io= new Server(httpServer)

const ip = "192.168.0.4"

app.use(express.static("public"))
app.get("/", (req, res) =>{
    res.sendFile(`${__dirname}/index.html`)
})

let messages = []

io.on("connection", (socket)=>{
    console.log("hola", socket.id);
    socket.emit("messages", messages )
    socket.on("newMessage", data => {
        messages.push(data)
        io.sockets.emit("messages", messages)
    })
})


httpServer.listen(3000,"192.168.0.4", ()=>
console.log("servidor OK"))