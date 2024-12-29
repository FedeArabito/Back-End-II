import CustomRouter from "../../utils/CustomRouter.js";
import passportCb from "../../middlewares/passportCb.js";

import {
  createProduct,
  readProducts,
  updateProduct,
  destroyProduct,
} from "../../controllers/products.controller.js";

class ProductsApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["PUBLIC"], createProduct);
    //this.create("/", ["ADMIN"], createProduct);
    this.read("/", ["PUBLIC"], readProducts);
    this.update("/:id", ["ADMIN"], passportCb("admin"), updateProduct);
    this.destroy("/:id", ["ADMIN"], passportCb("admin"), destroyProduct);
  };
}

const productApi = new ProductsApiRouter();
export default productApi.getRouter();
