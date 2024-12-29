import userApi from "./userApi.js";
import sessionsRouter from "./sessionsApi.js";
import CustomRouter from "../../utils/CustomRouter.js";
import productApi from "./productApi.js";
import cartApi from "./cartApi.js";


class ApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }

  init = () => {
    this.use("/user", ["PUBLIC"], userApi);
    this.use("/sessions", ["PUBLIC"], sessionsRouter);
    this.use("/cart", ["PUBLIC"], cartApi);
    this.use("/product", ["PUBLIC"], productApi);
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();