import { Router } from "express";
import {UserController} from "@/controllers/user-controllers"

const UserRoutes = Router()
const UserControllers = new UserController

UserRoutes.get("/", UserControllers.index)
UserRoutes.get("/:id", UserControllers.show)
UserRoutes.post("/", UserControllers.create)
UserRoutes.put("/", UserControllers.update)
UserRoutes.delete("/", UserControllers.delete)

export {UserRoutes}
