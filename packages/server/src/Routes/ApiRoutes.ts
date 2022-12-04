import { Router } from "express";

import UserController from "../controllers/UserController";
import ClassesController from '../controllers/ClassesController';

const routes = Router()

routes.get("/", (req, res) => res.status(200).json({ msg: "Production Deploy Success" }))

routes.get("/getUserData/:id", UserController.checkToken, UserController.getUserData)

routes.patch("/updateUserData/:id", UserController.checkToken, UserController.updateUserData)

routes.post("/SignIn", UserController.SignIn)
routes.post("/SignUp", UserController.SignUp)

routes.get("/listCourses", ClassesController.ListCourses)

export default routes