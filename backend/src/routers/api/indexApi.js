import userApi from "./userApi.js";
import sessionsRouter from "./sessionsApi.js";
import CustomRouter from "../../utils/CustomRouter.js";


class ApiRouter extends CustomRouter {
  constructor (){
    super();
    this.init();
  }

  init = () => {
    this.use("/user", ["PUBLIC"], userApi);
    this.use("/sessions", ["PUBLIC"], sessionsRouter);
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();