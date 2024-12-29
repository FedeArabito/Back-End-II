import Manager from "./manager.js";
import User from "../models/userModel.js";

const userManager = new Manager(User);
export default userManager;

