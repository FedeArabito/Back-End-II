import { model, Schema } from "mongoose"

const collection = "cart"

const schema = new Schema({
  products: { type: Array, required: true },
  user: { type: String, required: true },
  date: { type: String, required: true },
  total: { type: Number, required: true },
  quantity: { type: Number, required: true },

})


const CartModel = model(collection, schema) 

export default CartModel;