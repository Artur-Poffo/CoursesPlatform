"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const ClassesController_1 = __importDefault(require("../controllers/ClassesController"));
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => res.status(200).json({ msg: "Production Deploy Success" }));
routes.get("/getUserData/:id", UserController_1.default.checkToken, UserController_1.default.getUserData);
routes.patch("/updateUserData/:id", UserController_1.default.checkToken, UserController_1.default.updateUserData);
routes.post("/SignIn", UserController_1.default.SignIn);
routes.post("/SignUp", UserController_1.default.SignUp);
routes.get("/listCourses", ClassesController_1.default.ListCourses);
exports.default = routes;
