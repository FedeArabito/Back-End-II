import { Router } from "express";

class CustomRouter {
  constructor() {
    this._router = Router(); //crea el router con una variable privada
  }

  getRouter = () => this._router; //retornar el router

  applyCallback = (callback) => callback.map((cb) => async (req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      return next(error)
    }
  }) // aplica los middlewares que necesita la ruta


  responses = (req, res, next) => {
    res.json200 = (response, message) =>
      res.status(200).json({ response, message });
    res.json201 = (response, message) =>
      res.status(201).json({ response, message });
    res.json400 = (message) => res.status(400).json({ error: message });
    res.json401 = () => res.status(401).json({ error: "Bad Auth!" });
    res.json403 = () => res.status(403).json({ error: "Forbidden!" });
    res.json404 = () => res.status(404).json({ error: "Not found!" });
    return next();
  };

  policies = (policies) => async (req, res, next) => {
    try {
      if (policies.includes("PUBLIC")) return next();
      const token = req?.cookies?.token;
      if (!token) return res.json401();
      const data = jwt.verify(token, process.env.JWT_SECRET);
      const { role, user_id } = data;
      if (!role || !user_id) return res.json401();
      if (
        (policies.includes("USER") && role === "USER") ||
        (policies.includes("ADMIN") && role === "ADMIN")
      ) {
        const user = await readById(user_id);
        if (!user) return res.json401();
        req.user = user;
        return next();
      }
      return res.json403();
    } catch (error) {
      return res.json400(error.message);
    }
  };

  create = (path, policies, ...callback) => {
    this._router.post(path, this.applyCallback(callback), this.responses, this.policies(policies));
  };

  read = (path, policies, ...callback) => {
    this._router.get(path, this.appliyCallback(callback), this.responses, this.policies(policies));
  }

  update = (path, policies, ...callback) => {
    this._router.put(path, this.applyCallback(callback), this.responses, this.policies(policies));
  }

  destroy = (path, policies, ...callback) => {
    this._router.delete(path, this.applyCallback(callback), this.responses, this.policies(policies));
  }

  use = (path, policies, ...callback) => {
    this._router.use(path, this.applyCallback(callback), this.responses, this.policies(policies));
  }

}

export default CustomRouter