import { useState } from 'react';
import { GlobalStyle,  } from '../../styles/global';
import { Button, FormContainer, Input } from './styles';
import { addCliente, getClientes } from '../../services/clientesController';
import api from '../../services/api';

export function Form(){
  const [cliente, setCliente] = useState({});

  const onSubmit = async (e) => {
    
    const newCliente = await addCliente(cliente)
  }

  return(
      <>
        <FormContainer>
          <Input placeholder="Nome" onChange={(e) => setCliente({...cliente, nome: e.target.value})}/>  
          <Input placeholder="CPF" onChange={(e) => setCliente({...cliente, cpf: e.target.value})}/>          
          <Input placeholder="Telefone" onChange={(e) => setCliente({...cliente, telefone: e.target.value})}/> 
          <Input placeholder="Endereço" onChange={(e) => setCliente({...cliente, endereco: e.target.value})}/>         
                  
          <Button onClick={onSubmit} >
            Cadastrar
          </Button>

        </FormContainer>
        <GlobalStyle/>
      </>
  );
}