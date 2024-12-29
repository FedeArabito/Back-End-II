import { model, Schema } from "mongoose"


const collection = "products"

const schema = new Schema({
  name: {type: String, required: true},
  brand: {type:String, required: true},
  gender: {type: String, required: true},
  category: {type: String, required: true},
  price: {type: Number, required: true},  
  is_in_inventory: {type:Boolean, required: true, default: true},   
  items_left: {type:Number, required: true, default: 25},
  imageURL: {type:String, required: true},
  slug: {type:String},
  featured : {type:Boolean}
})

const ProductModel = model(collection, schema)

export default ProductModel