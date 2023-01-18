import express from 'express'

const productRoutes = express.Router()

productRoutes.get("/", (req, res)=>{
    res.send("getAllProducts")
})

productRoutes.get("/:id", (req, res)=>{
    res.send({getProdcutByID:req.params.id})
})

productRoutes.post("/", (req, res)=>{
    res.send("createProducts")
})

productRoutes.put("/", (req, res)=>{
    res.send("updateProduct")
})

productRoutes.delete("/", (req, res)=>{
    res.send("deleteProduct")
})

export default productRoutes