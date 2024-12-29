import CustomRouter from "../../utils/CustomRouter.js";
import {
  createCart,
  readCartsFromUser,
  updateCart,
  destroyCart,
  purchaseCart
} from "../../controllers/cart.controller.js";

class CartsApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["USER"], createCart);
    this.read("/:user_id", ["USER", "ADMIN"], readCartsFromUser);
    this.update("/:id", ["USER", "ADMIN"], updateCart);
    this.destroy("/:id", ["USER", "ADMIN"], destroyCart);
    this.get("/:cid/purchase", ["USER", "ADMIN"], purchaseCart);
  };
}

const cartApi = new CartsApiRouter();
export default cartApi.getRouter();
