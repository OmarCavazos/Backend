import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";

Category.hasMany(Product, {
    foreignKey: {
        allowNull: false
    },
    onDelete: "NO ACTION"
})
Product.belongsTo(Category)

<<<<<<< HEAD


=======
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
export { Category, Product, User }