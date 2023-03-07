import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import db from "./db/db.js"
import "dotenv/config"
import cookieParser from "cookie-parser"

<<<<<<< HEAD
const port = process.env.API_PORT;

=======

const port = process.env.API_PORT;

>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware de terceros
app.use(cookieParser())
app.use(morgan('tiny'))

app.use("/api", routes)

await db.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log("servidor ok ")
    })
}
)