import { useState } from 'react';
import { GlobalStyle,  } from '../../styles/global';
import { Button, FormContainer, Container, Input } from './styles';
import { updateCliente } from '../../services/clientesController';
import api from '../../services/api';

export function EditarForm(){
  const [cliente, setCliente] = useState({});

  const onSubmit = async (e) => {
    await updateCliente(e)
  }

  return(
    <>
      <Container>
        <FormContainer>
          <Input placeholder="id" onChange={(e) => setCliente({...cliente, id: e.target.value})}/> 
          <Input placeholder="Nome" onChange={(e) => setCliente({...cliente, nome: e.target.value})}/>  
          <Input placeholder="CPF" onChange={(e) => setCliente({...cliente, cpf: e.target.value})}/>          
          <Input placeholder="Telefone" onChange={(e) => setCliente({...cliente, telefone: e.target.value})}/> 
          <Input placeholder="Endereço" onChange={(e) => setCliente({...cliente, endereco: e.target.value})}/>         
                    
          <Button onClick={() => onSubmit(cliente)} >
            Editar
          </Button>

        </FormContainer>
      </Container>
        
      <GlobalStyle/>
    </>
  );
}