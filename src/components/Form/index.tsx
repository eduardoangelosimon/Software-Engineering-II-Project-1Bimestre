import { useState } from 'react';
import { GlobalStyle,  } from '../../styles/global';
import { Button, FormContainer, Input } from './styles';

export function Form(){

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  function createNewCliente() {
    const data = {
      nome,
      endereco,
      telefone,
      cpf,
    };
  }

  function handleCliente() {

  }

  return(
      <>
        <FormContainer>
          <Input placeholder="Nome"/>          
          <Input placeholder="Endereço"/>          
          <Input placeholder="Telefone"/>          
          <Input placeholder="CPF"/>          
          <Button type='submit' onClick={handleCliente}>
            Confirmar
          </Button >
        </FormContainer>
        <GlobalStyle/>
      </>
  );
}