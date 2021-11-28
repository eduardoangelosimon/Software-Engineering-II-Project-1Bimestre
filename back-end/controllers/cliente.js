import service from "../services/cliente.service.js";

class ClienteController {
  async listarClientes(req, res) {
    const result = await service.listarClientes();
    res.status(200).send(result);
  }

  async listarCliente(req, res) {
    const [result] = await service.listarCliente(req.body);
    res.status(200).send(result);
  }

  async inserirCliente(req, res) {
    await service.inserirCliente(req.body);
    res
      .status(200)
      .json({ success: true, message: "Cliente cadastrado com sucesso!" });
  }

  async atualizarCliente(req, res) {
    await service.atualizarCliente(req.body);
    res
      .status(200)
      .json({ success: true, message: "Cliente atualizado com sucesso!" });
  }

  async removerCliente(req, res) {
    const result = await service.removerCliente(req.body);

    if (result) {
      res
        .status(200)
        .json({ success: true, message: "Cliente removido com sucesso!" });
      return;
    }
    res
      .status(404)
      .json({ success: false, message: "ID do cliente não encontrado!" });
  }
}

export default new ClienteController();
