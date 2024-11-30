import express from "express"
import dbConnect from "./src/utils/dbConnect.js";
import ProductModel from "./src/data/mongo/models/productModel.js";
import cors from "cors"


const app = express()
const PORT = process.env.PORT;


app.use(cors());
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
  dbConnect();
})

app.get("/api/products", async (req, res)=>{
  try {
    const products = await ProductModel.find()
    res.send(products)
    console.log(products);
    
  } catch (error) {
    const errorMessage= res.status(500).json({ error: "Failed to fetch products" })
    console.log(errorMessage);
    
  }
})

