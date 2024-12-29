import CustomRouter from "../../utils/CustomRouter.js";
import { createUser, readUsers, updateUser, destroyUser } from "../../controllers/users.controller.js";




class UserApi extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], createUser);
    this.read("/", ["ADMIN"], readUsers);
    this.update("/:id", ["ADMIN", "USER"], updateUser);
    this.destroy("/:id", ["ADMIN", "USER"], destroyUser);
  }
}

const userApi = new UserApi();
export default userApi.getRouter();