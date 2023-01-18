import express, {Router} from 'express'
import routes from './routes/index.js'
import morgan from 'morgan'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/api", routes)

app.use(morgan('tiny'))

app.listen(8080, () =>{
    console.log("server OK");
})