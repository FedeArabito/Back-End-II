import CustomRouter from "../../utils/CustomRouter.js";

import { create, read, destroy, update } from "../../data/managers/userManager.js";


const createUser = async (req, res) => {
  const message = "USER CREATED";
  const data = req.body;
  const user = await create(data);
  return res.json.status(201).json({ user, message: message });
};

const readUser = async (req, res) => {
  const message = "USER FOUND"
  const id = await read()
  return res.json.status(200).json({ id, message: message });
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const message = "USER UPDATED"
  const response = await update(id)
  return res.json.status(200).json({ response, message: message });
}

const destroyUser = async (req, res) => {
  const { id } = req.params;
  const message = "USER DELTED"
  const response = await destroy(id)
  return res.json.status(200).json({ response, message: message });
}

class UserApi extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], createUser);
    this.read("/", ["ADMIN"], readUser);
    this.update("/:id", ["ADMIN", "USER"], updateUser);
    this.destroy("/:id", ["ADMIN", "USER"], destroyUser);
  }
}

const userApi = new UserApi();


export default userApi.getRouter();