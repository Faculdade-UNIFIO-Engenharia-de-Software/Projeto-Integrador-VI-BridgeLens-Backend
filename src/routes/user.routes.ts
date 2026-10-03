import { Router } from "express";
import {UserController} from "@/controllers/user.controller"

const UserRoutes = Router()
const UserControllers = new UserController

UserRoutes.post("/", UserControllers.registerFromSignUp)

export {UserRoutes}
