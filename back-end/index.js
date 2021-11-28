import express from "express";
import "express-async-errors";
import cors from "cors";

import clientesRouter from "./routes/clientes.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use(clientesRouter);

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).send({
    success: false,
    message: "Erro, contate o administrador do sistema.",
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
