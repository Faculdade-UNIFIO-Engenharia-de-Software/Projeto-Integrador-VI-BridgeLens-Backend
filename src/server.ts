import express from "express";
import { routes } from "@/routes";
import { Request, Response, NextFunction } from "express";

const PORT = process.env.backend_port || 3000;
const server = express();

server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
  console.log("Server is Running in http://localhost:" + PORT);
});
