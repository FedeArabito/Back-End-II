import CustomRouter from "../../utils/CustomRouter.js";
import passportCb from "../../middlewares/passportCb.js";
import { register, login, online } from "../../controllers/sessions.controller.js";

class SessionsApiRouter extends CustomRouter {
  constructor() {
    super()
    this.init()
  }

  init() {
    this.create("/register", ["PUBLIC"], passportCb("register"), register)
    this.create("/login", ["PUBLIC"], passportCb("login"), login)
    this.create("/online", ["ADMIN", "USER"], passportCb("online"), online)

  }
}

const sessionsRouter = new SessionsApiRouter();
export default sessionsRouter.getRouter();






