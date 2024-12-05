import Manager from "./manager.js";
import User from "../mongo/models/userModel.js";

const userManager = new Manager(User);
const {create, readByEmail, readById, read, update, destroy} = userManager;

export {create, readByEmail, readById, read, update, destroy};