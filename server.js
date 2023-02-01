import express, {Router} from 'express'
import routes from './routes/index.js'
import morgan from 'morgan'
import db from './db/db.js'
import {Category} from './db/models/index.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/api", routes)

//middleware de terceros
app.use(morgan('tiny'))


await db.sync({force:false}).then(()=>{
    app.listen(8080, () =>{
        console.log("server OK");
    })
})