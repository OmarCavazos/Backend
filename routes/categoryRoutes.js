import express from 'express'

const categoryRoutes = express.Router()

categoryRoutes.get("/", (req, res)=>{
    res.send("getAllcategories")
})

categoryRoutes.get("/:id", (req, res)=>{
    res.send({getProdcutByID:req.params.id})
})

categoryRoutes.post("/", (req, res)=>{
    res.send("createcategorys")
})

categoryRoutes.put("/", (req, res)=>{
    res.send("updatecategory")
})

categoryRoutes.delete("/", (req, res)=>{
    res.send("deletecategory")
})

export default categoryRoutes