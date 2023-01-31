import express from 'express'
import db from '../db/db.js'

const productRoutes = express.Router()

productRoutes.get("/", (req, res)=>{
    const query = `SELECT product.name, product.price, product.stock, product.description, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid`
    db.query(query,(err, result)=>{
        if(err) return next(err)
        return res.status(200).send({message: "estos son los prodctos encontrados: ", success:true,result})
    })
    res.send("getAllProducts")
})

productRoutes.get("/:category", (req, res)=>{
    const query = `SELECT product.name, product.price, product.stock, product.description, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid WHERE categoryid=1`
    db.query(query,(err, result)=>{
        if(err) return next(err)
        return res.status(200).send({message: "estos son los prodctos encontrados: ", success:true,result})
    })
        res.send("getAllProducts")
})

productRoutes.get("/:category", (req, res)=>{
    const query = `SELECT product.name, product.price, product.stock, product.description, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid WHERE category.name = "tacos"`
    db.query(query,(err, result)=>{
        if(err) return next(err)
        return res.status(200).send({message: "estos son los prodctos encontrados: ", success:true,result})
    })
        res.send({getProdcutByID:req.params.id})
})


productRoutes.get("/:category", (req, res)=>{
    
    
    // const query = `SELECT product.name, product.price, product.stock, product.description, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid WHERE category.name = "tacos"`
    // db.query(query,(err, result)=>{
    //     if(err) return next(err)
    //     return res.status(200).send({message: "estos son los prodctos encontrados: ", success:true,result})
    // })
    //     res.send({getProdcutByID:req.params.id})
})

productRoutes.post("/", (req, res)=>{
    res.send("createProducts")
})

productRoutes.put("/", (req, res)=>{
    res.send("updateProduct")
})

productRoutes.delete("/:id", (req, res, next)=>{
    const {id} = req.params
    const query = "DELETE FROM product WHERE id=?"
    db.query(query, id, (err, result)=>{
        if(err) return next(err) 
        res.status(202).send({
            message: "producto eliminado",
            success:true
        })
    })
})

export default productRoutes