import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(function (req, res, next){
    console.log(Date());
    next()
})

const method = (req, res, next) => {
    console.log("🚀 ~ file: server.js:15 ~ method ~ req", req.method)
    next()
}
app.use(method)

let user=false


app.get("/", (req, res) => {
    res.send("<h1>Hola</h1>")
})

// CRUD
// Create
app.post("/", isUser, (req, res) => {
    res.send("post")
})

// Read
app.get("/", (req, res) => {
    res.send("getAll")
})

// Read by ID
app.get("/:id", (req, res) => {
    res.send("getbyID")
})

// update
app.put("/", (req, res) => {
    res.send("update")
})

// delete
app.delete("/", (req, res) => {
    res.send("delete")
})

app.listen(8080, ()=>{
    console.log("servidor OK");
} )