import express from "express"
import UserController from "../controllers/UserController.js"
<<<<<<< HEAD

const userRoutes = express.Router()

userRoutes.get("/", UserController.getAllUsers)
userRoutes.get("/:id", UserController.getUserById)
userRoutes.post("/", UserController.createUser)
userRoutes.put("/:id", UserController.updateUser)
userRoutes.delete("/id", UserController.deleteUser)
userRoutes.post("/login", UserController.login)

=======
import authMe from "../midleware/authMe.js"
import isAdmin from "../midleware/isAdmin.js"

const userRoutes = express.Router()

userRoutes.post("/", UserController.createUser)
userRoutes.post("/login", UserController.login)

userRoutes.use(authMe)
userRoutes.get("/me", UserController.me)
userRoutes.get("/:id", UserController.getUserById)
userRoutes.post("/logout", UserController.logOut)
userRoutes.use(isAdmin)
userRoutes.get("/", UserController.getAllUsers)
userRoutes.put("/:id", UserController.updateUser)
userRoutes.delete("/:id", UserController.deleteUser)
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894

export default userRoutes