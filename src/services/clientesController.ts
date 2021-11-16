import api from "./api";
import Cliente from "../model/Cliente"

export const addCliente = async (cliente: Cliente) => {
  return api.post("/clientes/cliente", {
    nome: cliente.nome,
    cpf: cliente.cpf,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
  })
}

export const getClientes = async () => {

  const {data: clientes} = await api.get('/clientes')

  return clientes
}