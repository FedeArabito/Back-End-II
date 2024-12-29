import dotenv from "dotenv"
import express from "express"
import dbConnect from "./src/utils/dbConnect.js";
import ProductModel from "./src/dao/mongo/models/productModel.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import session from "express-session"
import MongoStore from "connect-mongo";
import pathHandler from "./src/middlewares/pathHandlder.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import morgan from "morgan";
import pkg from "passport";
import indexRouter from "./src/routers/indexRouter.js";
import envUtil from "./src/utils/env.js";


dotenv.config();



const app = express()
const port = envUtil.PORT;



app.listen(port, () => {
  console.log(`Server running on port 5000`);
  dbConnect();
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(morgan("dev"))
app.use(cookieParser(envUtil.JWT_SECRET))
app.use(
  session({
    secret: envUtil.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: envUtil.MONGO_LINK,
      ttl: 24 * 60 * 60,
    }),
  })
)
app.use(cors({
  origin: true,
  credentials: true
}))

app.use(indexRouter)
app.use(errorHandler)
app.use(pathHandler)

//conectar productos a react
app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.send(products)
    console.log(products);

  } catch (error) {
    const errorMessage = res.status(500).json({ error: "Failed to fetch products" })
    console.log(errorMessage);
  }
})

