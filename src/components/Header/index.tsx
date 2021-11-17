import { Link } from 'react-router-dom';
import { HeaderContainer, NavButton } from './styles';

const Header = () =>{
  return (
    <>
      <HeaderContainer>
          <nav>
            <ul>
              <NavButton>
                <Link to="/Home">Home</Link>
              </NavButton>
              <NavButton>
                <Link to="/EditarCliente">Editar Cliente</Link>
              </NavButton>
              <NavButton>
                <Link to="/SignUp">SignUp</Link>
              </NavButton>
              <NavButton>
                <Link to="/ListaDeClientes">Lista de Clientes</Link>
              </NavButton>
            </ul>
          </nav>
      </HeaderContainer>
    </>
  );
}

export default Header;