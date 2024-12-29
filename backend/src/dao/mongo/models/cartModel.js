import { model, Schema } from "mongoose"

const collection = "cart"

const schema = new Schema({
  product_id: { type: Types.ObjectId, ref: "products", required: true },
  user: { type: Types.ObjectId, ref: "users", required: true },
  date: { type: String, required: true },
  total: { type: Number, required: true },
  quantity: { type: Number, required: true },

})


const CartModel = model(collection, schema)

export default CartModel;