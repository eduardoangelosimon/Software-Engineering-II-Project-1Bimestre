import { useState, useEffect } from 'react';
import { getClientes } from '../../services/clientesController';

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
      <div>
        {clientes.map((cliente) => (
          <div key={cliente.id}>
            <p>{cliente.id}</p>
            <p>{cliente.nome}</p>
            <p>{cliente.cpf}</p>
            <p>{cliente.telefone}</p>
            <p>{cliente.endereco}</p>
          </div>
        ))}
      </div>
    </>
  );
}
