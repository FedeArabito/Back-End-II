import crypto from "crypto";
import argsUtil from "../utils/args.js";

const { persistence } = argsUtil;

class CartDTO {
  constructor(data) {
    persistence !== "mongo" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.product_id = data.product_id;
    this.user_id = data.user_id;
    this.quantity = data.quantity;
    this.state = data.state || "reserved";
    persistence !== "mongo" && (this.createdAt = new Date());
    persistence !== "mongo" && (this.updatedAt = new Date());
  }
}

export default CartDTO;
