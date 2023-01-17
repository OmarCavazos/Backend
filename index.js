// const http = require ("http")

// const x=10
// console.log("🚀 ~ file: index.js:4 ~ x", x)

// const serverApp = http.createServer((peticion, respuesta)=> {
//     respuesta.end("Hola curso UP")
// })

// const server  = serverApp.listen(8080, () => {
//     console.log("servidor OK");
// })


import express, {urlencoded} from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extender:true}))


app.get("/", (req, res) => {
    res.status(202).send("getAll")
})

app.get("/:id/:name", (req, res) => {
    console.log("🚀 ~ file: index.js:20 ~ app.get ~ req", req.params)
    res.status(200).send({type:"getByID", params: req.params})
})

app.post(("/", (req, res) => {
    const body = req.body
    res.status(200).send({
        type: "post", message: body
    })
}))

app.listen(8080, ()=>{
    console.log("todo OK");
})