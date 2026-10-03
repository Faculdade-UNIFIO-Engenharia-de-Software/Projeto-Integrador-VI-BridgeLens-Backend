import { Router } from "express";
import { UserRoutes } from "./user.routes";

const routes = Router();

// Adicionar as rotas aqui abaixo
routes.use("/users", UserRoutes)

export { routes };
