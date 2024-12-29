import dbConnect from "../utils/dbConnect.js";
import argsUtil from "../utils/args.js";

const { persistence } = argsUtil;


let dao = {};

switch (persistence) {
  case "memory":
    console.log("connected to memory system");

    const { default: ProductsManagerMemory } = await import(
      "./memory/ProductsManager.memory.js"
    );
    const { default: UsersManagerMemory } = await import(
      "./memory/UserManager.memory.js"
    );
    const { default: CartsManagerMemory } = await import(
      "./memory/CartsManager.memory.js"
    );
    dao = {
      ProductsManager: ProductsManagerMemory,
      UsersManager: UsersManagerMemory,
      CartsManager: CartsManagerMemory,
    };
    break;
  case "fs":
    console.log("connected to file system");

    const { default: ProductsManagerFS } = await import(
      "./fs/ProductManager.fs.js"
    );
    const { default: UsersManagerFS } = await import("./fs/UserManager.fs.js");
    const { default: CartsManagerFS } = await import("./fs/CartManager.fs.js");
    dao = {
      ProductsManager: ProductsManagerFS,
      UsersManager: UsersManagerFS,
      CartsManager: CartsManagerFS,
    };
    break;
  default:
    console.log("connected to mongo database");

    dbConnect();

    const { default: ProductsManagerMongo } = await import(
      "./mongo/managers/productManager.js"
    );
    const { default: UsersManagerMongo } = await import(
      "./mongo/managers/userManager.js"
    );
    const { default: CartsManagerMongo } = await import(
      "./mongo/managers/cartManager.js"
    );
    dao = {
      ProductsManager: ProductsManagerMongo,
      UsersManager: UsersManagerMongo,
      CartsManager: CartsManagerMongo,
    };
    break;
}

export default dao;