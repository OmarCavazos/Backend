import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js";
import bcrypt from "bcrypt"

<<<<<<< HEAD
class User extends Model { 
    hashAuth(password, salt){
=======
class User extends Model {

    hashAuth(password, salt) {
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
        return bcrypt.hash(password, salt)
    }

    async validatePassword(password) {
<<<<<<< HEAD
        const passwordHash = await this.hashAuth( password, this.salt )
        return passwordHash === this.password
    }


=======
        const passwordHash = await this.hashAuth(password, this.salt)
        return passwordHash === this.password
    }
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
}

User.init({
    name: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    lastName: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    password: {
        type: Dt.STRING,
<<<<<<< HEAD
        allowNull: false
=======
        allowNull: false,
        validate: {
            len: [8, 10],
        }
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
    },
    role: {
        type: Dt.STRING(25)
    },
    salt: {
<<<<<<< HEAD
        type:Dt.STRING
    },
    email:{
        type: Dt.STRING
=======
        type: Dt.STRING
    },
    email: {
        type: Dt.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
    }
}, {
    sequelize: db,
    modelName: "User"
})

<<<<<<< HEAD
User.beforeCreate( async ( user, options ) => {
    const salt= await bcrypt.genSalt() 
    user.salt = salt
    const passwordHash = await user.hashAuth( user.password, user.salt )
    user.password = passwordHash
});

User.afterCreate(async user=>{
    if (user.id===1) {
        return await user.update({role: "admin"})
=======
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt()
    user.salt = salt
    const passwordHash = await user.hashAuth(user.password, user.salt)
    user.password = passwordHash
})

User.afterCreate(async user => {
    if (user.id === 1) {
        return await user.update({ role: "admin" })
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
    }
})

export default User