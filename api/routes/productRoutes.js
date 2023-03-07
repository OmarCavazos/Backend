import express from "express"
import ProductController from "../controllers/ProductController.js"
<<<<<<< HEAD
=======
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"
import { upload } from "../midleware/multer.js"
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894

export const productRoutes = express.Router()

productRoutes.get("/", ProductController.getAllProducts)
productRoutes.get("/:id", ProductController.getProductById)
<<<<<<< HEAD
=======
// productRoutes.use(authMe)
// productRoutes.use(isAdmin)
productRoutes.get("/getproductbyupdate/:id", ProductController.getProductByUpdate)
// productRoutes.post("/",upload.fields([{ name: 'image', maxCount: 2 }]) , ProductController.createPoduct)
productRoutes.post("/", upload.array('image',2), ProductController.createPoduct)
productRoutes.put("/:id", ProductController.updatePoduct)
productRoutes.delete("/:id", ProductController.deletePoduct)
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894

productRoutes.get("/getproductbyupdate/:id", ProductController.getProductByUpdate)
productRoutes.post("/", ProductController.createPoduct)
productRoutes.put("/:id", ProductController.updatePoduct)
productRoutes.delete("/:id", ProductController.deletePoduct)
