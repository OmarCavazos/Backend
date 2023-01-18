import express from 'express'


const userRoutes=express.Router()

userRoutes.get("", (req, res) => {
    res.send("getAllUser")
})

userRoutes.get("/user/:id", (req, res) => {
    res.send("getuserbyID")
})

export default userRoutes