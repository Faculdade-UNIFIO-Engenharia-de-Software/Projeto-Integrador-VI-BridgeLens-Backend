import { Router } from "express";
import { UserRoutes } from "./user-routes";

const routes = Router();

// Adicionar as rotas aqui abaixo
routes.use("/", (request, response) => {
  return response.json({ message: "OK, está funcionando!" });
});
routes.use("/users", UserRoutes)

export { routes };
