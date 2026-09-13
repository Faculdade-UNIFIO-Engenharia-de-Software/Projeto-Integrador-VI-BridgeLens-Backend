import { Router } from "express";

const routes = Router();

// Adicionar as rotas aqui abaixo
routes.use("/", (request, response) => {
  return response.json({ message: "OK, está funcionando!" });
});

export { routes };
