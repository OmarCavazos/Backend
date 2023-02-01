import { Sequelize, DataTypes as Dt, Model } from 'sequelize';
import db from "../db.js";

class Category extends Model {}

Category.init({
    name: {
        type: Dt.STRING,
        allowNull: false
    },
    Category: {
        type: Dt.STRING,
        allowNull: false
    }
},{
    sequelize: db,
    modelName: "Category",
})

export default Category;