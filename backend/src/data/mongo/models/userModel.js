import { model, Schema } from "mongoose";


const collection = "users";

const schema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, required: true, default: false},
  role: {type: String, required: true, default: "user", enum:["user", "admin"]}, 
  country: {type: String, required: true, default: "argentina"}, 
  birthdate: {type: String, required: true, default: "1990-01-01"}, 
  image: {type: String, required: true, default: "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_800x800.jpg"},
});

const UserModel = model(collection, schema);

export default UserModel