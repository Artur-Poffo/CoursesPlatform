import { Router } from "express";

import UserController from "../controllers/UserController";

const routes = Router()

routes.post("/login", UserController.SignIn)
routes.post("/signup", UserController.SignUp)

export default routes