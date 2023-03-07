import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";
import isAdmin from "../midleware/isAdmin.js"
import authMe from "../midleware/authMe.js"
const categoryRoutes = Router()

categoryRoutes.get("/", CategoryController.getAllCategories)
categoryRoutes.get("/:id", CategoryController.getCategoryById)
<<<<<<< HEAD
=======
categoryRoutes.use(authMe)
categoryRoutes.use(isAdmin)
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
categoryRoutes.post("/", CategoryController.createCategory)
categoryRoutes.put("/:id", CategoryController.updateCategory)
categoryRoutes.delete("/:id", CategoryController.deleteCategory)

export default categoryRoutes

