import api from "./api";
import Cliente from "../model/Cliente"
import { idText } from "typescript";

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

export const updateCliente = async (cliente: any) => {
  await api.put("/clientes/cliente", {
    id: cliente.id,
    nome: cliente.nome,
    cpf: cliente.cpf,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
  })
}