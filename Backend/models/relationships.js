import { Producte } from "./ProductesModel.js";
import { CartItem } from "./CartItemsModel.js";
import { Cart } from "./CartsModel.js";
import { User } from "./userModel.js";

// Un usuario tiene un carrito (1:1)
User.hasOne(Cart, { foreignKey: "user_id", as: "cart" });
Cart.belongsTo(User, { foreignKey: "user_id", as: "user" });

// Un carrito tiene muchos items (1:N)
Cart.hasMany(CartItem, { foreignKey: "cart_id", as: "items" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id", as: "cart" });

// Un producto puede estar en muchos items de carrito (1:N)
Producte.hasMany(CartItem, { foreignKey: "product_id", as: "cartItems" });
CartItem.belongsTo(Producte, { foreignKey: "product_id", as: "producte" });