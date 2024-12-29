import CustomRouter from "../utils/CustomRouter.js";
import apiRouter from "./api/indexApi.js";

class IndexRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  };
}

let indexRouter = new IndexRouter();
indexRouter = indexRouter.getRouter();
export default indexRouter;