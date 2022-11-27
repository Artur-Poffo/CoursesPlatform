import jwt from 'jsonwebtoken';
import { Router } from "express";

import UserController from "../controllers/UserController";

const routes = Router()

routes.get("/getUserData/:id", UserController.checkToken, UserController.getUserData)
routes.post("/SignIn", UserController.SignIn)
routes.post("/SignUp", UserController.SignUp)

export default routes