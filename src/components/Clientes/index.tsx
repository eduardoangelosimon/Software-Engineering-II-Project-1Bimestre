import { useState, useEffect } from 'react';
import { getClientes } from '../../services/clientesController';
import { DadosDoCliente, DadosContainer, EditButton } from './styles';


export default function Clientes() {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    const handleGetClients = async() => {
      const data = await getClientes()
  
      setClientes(data)
    }
    handleGetClients()
  }, [])

  return (
    <>
      <DadosContainer>
        {clientes.map((cliente) => (
          <DadosDoCliente key={cliente.id}>

            <span>ID: {cliente.id}</span>
            <br />
            <span>Nome: {cliente.nome}</span>
            <br />
            <span>CPF: {cliente.cpf}</span>
            <br />
            <span>Telefone: {cliente.telefone}</span>
            <br />
            <span>Endereço: {cliente.endereco}</span>
  
          </DadosDoCliente>
        ))}
      </DadosContainer>
      <EditButton>Editar Cliente</EditButton>
    </>
  );
}
