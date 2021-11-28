import { Router } from "express";
import cliente from "../controllers/cliente.js";

const router = Router();

router.get("/clientes", cliente.listarClientes);

router.get("/clientes/cliente", cliente.listarCliente);

router.post("/clientes/cliente", cliente.inserirCliente);

router.put("/clientes/cliente", cliente.atualizarCliente);

router.delete("/clientes/cliente", cliente.removerCliente);

export default router;