import { User } from "../models/index.js";
<<<<<<< HEAD
import bcrypt from "bcrypt"
=======
import { generateToken, verify } from "../config/token.js";
import registerMail from "../utils/mails/registerMail.js";


>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894

class UserController {
    static async createUser(req, res) {
        try {
<<<<<<< HEAD
            // const admin = await User.count({
            //     where: {
            //         id: 1
            //     }
            // })
            // if (admin===0){
            //     req.body.role="admin"
            // }
            const results = await User.create(req.body)
            res.status(200).send({ succes: true, message: "Usuario creado con exito", results })
=======
            const { name, lastName, password, email } = req.body
            const results = await User.create({ name, lastName, password, email })
            // await registerMail(name, email)
            res.status(200).send({ succes: true, message: "Usuario creado con exito" })
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getAllUsers(req, res) {
        try {
            const results = await User.findAll({
                attributes: ["id", "name", "lastName", "role"],
            })
            if (results.length === 0) throw "No hay usuarios"
            res.status(200).send({ succes: true, message: "Usuarios encontrados", results })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async getUserById(req, res) {
        try {
            const results = await User.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ["id", "name", "lastName", "role"]
            })
            if (!results) throw "No se encontro el usuario"
            res.status(200).send({ success: true, message: "Usuarios encontrados", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async updateUser(req, res) {
        try {
            const results = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (results[0] == 0) throw "No se pudo actualizar"
            res.status(200).send({ success: true, message: "Usuario actualizado con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
    static async deleteUser(req, res) {
        try {
            const results = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (results == 0) throw "No se pudo eliminar el usuario"
            res.status(200).send({ success: true, message: "Usuario eliminado  con exito", results })

        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body
            const results = await User.findOne({
                where: {
                    email
                }
            })
<<<<<<< HEAD

            if (!results) throw "no se encontro el usuario"
            
            const isEqual = await results.validatePassword(password)

            if (!isEqual) throw "no se encontro el usuario"
            res.status(200).send({ success: true, message: "Usuario logeado", results })

=======
            if (!results) throw "No se encontro el usuario"
            const isEqual = await results.validatePassword(password)
            if (!isEqual) throw "No se encontro el usuario"

            const payload = {
                email: results.email,
                role: results.role
            }

            const token = generateToken(payload)
            res.cookie("token", token)
            res.status(200).send({ success: true, message: "Usuario logueado" })
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }

<<<<<<< HEAD

    static async me(req, res) {
        try {

        } catch (error) {

        }
    }
    static async logOut(req, res) {
        try {

        } catch (error) {

        }
=======
    static async me(req, res) {
        res.status(200).send({ success: true, message: "Usuario logueado", result: req.user })
    }

    static async logOut(req, res) {
        res.clearCookie("token");
        res.send(204)
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
    }
}



export default UserController