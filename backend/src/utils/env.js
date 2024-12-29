import { config } from "dotenv";
import argsUtil from "./args.js";

const { env } = argsUtil;

const path = "./.env." + env;
config({ path });

const envUtil = {
  PORT: process.env.PORT,
  MONGO_LINK: process.env.MONGO_LINK,
  JWT_SECRET: process.env.SECRET_KEY,
  BASE_URL: process.env.BASE_URL,
};

export default envUtil;
