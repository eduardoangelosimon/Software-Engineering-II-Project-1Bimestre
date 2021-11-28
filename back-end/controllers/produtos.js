import service from "../services/produto.service";

class ProdutoController {
  async listarProdutos(req, res) {
    const result = await service.listarProdutos();
    res.status(200).send(result);
  }

  async listarProduto(req, res) {
    const [result] = await service.listarProduto(req.body);
    res.status(200).send(result);
  }

  async inserirProduto(req, res) {
    await service.inserirProduto(req.body);
    res
      .status(200)
      .json({ success: true, message: "Produto cadastrado com sucesso!" });
  }

  async atualizarProduto(req, res) {
    await service.atualizarProduto(req.body);
    res
      .status(200)
      .json({ success: true, message: "Produto atualizado com sucesso!" });
  }

  async removerProduto(req, res) {
    const result = await service.removerProduto(req.body);

    if (result) {
      res
        .status(200)
        .json({ success: true, message: "Produto removido com sucesso!" });
      return;
    }
    res
      .status(404)
      .json({ success: false, message: "ID do produto não encontrado!" });
  }
}

export default new ProdutoController();
