import './App.css';
import { LoginPage } from './modules/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './modules/Home';
import { ListaDeClientes } from './modules/ListaDeClientes';
import { SignUp } from './modules/SignUp';
import { EditarCliente } from './modules/EditarCliente';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/EditarCliente" element={<EditarCliente />}/>
            <Route path="/LoginPage" element={<LoginPage />}/>
            <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/ListaDeClientes" element={<ListaDeClientes/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;