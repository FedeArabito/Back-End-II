import CustomRouter from "../../utils/CustomRouter.js";
import { readById } from "../../data/managers/userManager.js";
import passportCb from "../../middlewares/passportCb.js";

class SessionsApiRouter extends CustomRouter{
  constructor(){
    super()
    this.init()
  }

  init(){
    this.create("/register", ["PUBLIC"], passportCb("register"), register)
    this.create("/login", ["PUBLIC"], passportCb("login"), login)
    this.create("online", ["ADMIN", "USER"], passportCb("online"), online)
  
  }
}

const register = async(req, res)=>{
  const {_id} = req.user;
  const message = "USER CREATED"
  const user = await readById(_id);
  return res.json.status(201).json({user,message:message});
};

const login = async(req, res)=>{
  const {token} = req.user;
  const options = {
    maxAge: 60*60*24*17,
    httpOnly: true
  }
  const message = "USER LOGGED IN"
  return res.cookie("token", token, options).json.status(200).json({message:message});
};

async function online(req, res, next) {
  const { user_id } = req.session;
  const one = await readById(user_id);
  if (req.session.user_id) {
    const message = one.email + " is online";
    const response = true;
    return res.json200(response, message);
  } else {
    const message = "User is not online";
    return res.json400(message);
  }
}

const sessionsRouter = new SessionsApiRouter();
export default sessionsRouter.getRouter();






